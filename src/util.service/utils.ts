import { useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  onClickOutside: () => void
) {
    
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}