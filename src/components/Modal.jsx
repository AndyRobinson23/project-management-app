import { useRef } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function ({ children, buttonCaption }, ref) {
  const dialogRef = useRef();

  // Allows this component to expose a method which any components which render this component can use to trigger functionality within this component. In this case, it's an open() method which triggers the built-in showModal method on the dialog element to open it
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
