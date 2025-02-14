from fastapi import FastAPI, HTTPException, Depends, Form, Request
from fastapi.security import OAuth2PasswordBearer
import json
import base64
import os
from starlette.middleware.sessions import SessionMiddleware
from starlette.responses import FileResponse

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key="your_secret_key")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# Dummy user credentials
USER_CREDENTIALS = {"username": "admin", "password": "password"}

# Paths for data storage
GOODS_FILE = "goods.json"
ORDERS_FILE = "orders.json"
IMAGES_FOLDER = "images"

# Function to read JSON data
def read_json(file_path):
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as file:
            return json.load(file)
    return []

# Function to write JSON data
def write_json(file_path, data):
    with open(file_path, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=4)

# Function to encode image data
def encode_image(image_path):
    if os.path.exists(image_path):
        with open(image_path, "rb") as image_file:
            return base64.b64encode(image_file.read()).decode("utf-8")
    return None

@app.post("/login")
def login(request: Request, username: str = Form(...), password: str = Form(...)):
    if username == USER_CREDENTIALS["username"] and password == USER_CREDENTIALS["password"]:
        request.session["user"] = username
        return {"access_token": "fake-token", "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/logout")
def logout(request: Request):
    request.session.pop("user", None)
    return {"message": "User logged out successfully"}

@app.get("/goods")
def get_goods():
    goods = read_json(GOODS_FILE)
    for item in goods:
        image_path = os.path.join(IMAGES_FOLDER, f"image_{item['id']}.png")
        item["image_data"] = encode_image(image_path)
    return goods

@app.get("/images/{id}")
def get_image(id: int):
    image_path = os.path.join(IMAGES_FOLDER, f"image_{id}.png")
    if not os.path.exists(image_path):
        raise HTTPException(status_code=404, detail="Image not found")
    return FileResponse(image_path)

@app.post("/orders")
def create_order(request: Request, order: dict):
    user = request.session.get("user")
    if not user:
        raise HTTPException(status_code=401, detail="User not logged in")
    
    order["user"] = user
    orders = read_json(ORDERS_FILE)
    orders.append(order)
    write_json(ORDERS_FILE, orders)
    return {"message": "Order created successfully", "order": order}
