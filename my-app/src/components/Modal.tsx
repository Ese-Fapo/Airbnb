import { useEffect, useRef, type ReactNode } from "react";

/** Native dialogs keep keyboard focus inside the modal and make the background inert. */
export function Modal({ children, label, onClose, className = "", id }: {
  children: ReactNode;
  label: string;
  onClose: () => void;
  className?: string;
  id?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      id={id}
      aria-label={label}
      aria-modal="true"
      className={`app-modal ${className}`}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      {children}
    </dialog>
  );
}
