import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
// Native dialogs provide focus containment, an inert background, and Escape handling.
export default function Modal({ isOpen, onClose, children, title = 'Royj Tailors', className = '' }) {
  const dialog = useRef(null);
  const closeCallback = useRef(onClose);
  closeCallback.current = onClose;
  useEffect(() => {
    const element = dialog.current;
    if (!isOpen) return;
    const focused = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = oldOverflow;
      if (focused?.isConnected) focused.focus({ preventScroll: true });
    };
  }, [isOpen]);
  return createPortal(<dialog ref={dialog} aria-label={title} className={'modal ' + className}
    onCancel={event => { event.preventDefault(); closeCallback.current(); }}
    onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeCallback.current();
    }}>
    {isOpen && <><button className="icon-button modal-close" type="button" onClick={onClose} aria-label="Close dialog"><FiX /></button><div className="modal-body">{children}</div></>}
  </dialog>, document.body);
}
