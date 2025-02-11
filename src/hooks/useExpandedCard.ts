import { useState, useCallback } from 'react';

export function useExpandedCard() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const handleExpand = useCallback((id: string) => {
    setExpandedCardId(id);
    document.body.style.overflow = 'hidden';
  }, []);

  const handleCollapse = useCallback(() => {
    setExpandedCardId(null);
    document.body.style.overflow = '';
  }, []);

  return {
    expandedCardId,
    handleExpand,
    handleCollapse,
  };
}