import { useState, useEffect, useRef } from 'react';

export const useModalOpen = <T extends Element>(
  initOpen: boolean,
): {
  ref: React.MutableRefObject<T | null>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const [open, setOpen] = useState<boolean>(initOpen);

  const ref = useRef<T | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  const handleESC = (event: KeyboardEvent) => {
    if (ref.current && event.key === 'Escape') {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [open]);

  useEffect(() => {
    document.addEventListener('keydown', handleESC, false);
    return () => {
      document.removeEventListener('keydown', handleESC, false);
    };
  }, [open]);

  return { ref, open, setOpen };
};
