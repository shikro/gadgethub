import { useState, useCallback } from 'react';

export function useExpandedCard() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const handleExpand = useCallback((id: string) => {
    setExpandedCardId(id);
  }, []);

  const handleCollapse = useCallback(() => {
    setExpandedCardId(null);
  }, []);

  return {
    expandedCardId,
    handleExpand,
    handleCollapse,
  };
}