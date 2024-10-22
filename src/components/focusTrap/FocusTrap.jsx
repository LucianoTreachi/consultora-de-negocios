import { useEffect, useRef, cloneElement } from "react";

export default function FocusTrap({ children, closeModal }) {
  const trapRef = useRef(null);
  const firstElementRef = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {
    const focusableElements = trapRef.current.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length > 0) {
      firstElementRef.current = focusableElements[0];
      lastElementRef.current = focusableElements[focusableElements.length - 1];

      trapRef.current.focus();

      const handleKeyDown = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElementRef.current) {
              e.preventDefault();
              lastElementRef.current.focus();
            }
          } else {
            if (document.activeElement === lastElementRef.current) {
              e.preventDefault();
              firstElementRef.current.focus();
            }
          }
        }

        if (e.key === "Escape" && closeModal) {
          closeModal();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [closeModal]);

  return cloneElement(children, { ref: trapRef, tabIndex: "-1" });
}
