<<<<<<< HEAD
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
=======
// src/components/Modal.js
import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem 3rem;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  width: 600px;
  position: relative;

  @media (max-width: 640px) {
    width: 90%;
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
  
  &:hover {
    color: #000;
  }
`;

const modalVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
  exit: { opacity: 0, y: 50 }
};

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalBackdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
          >
            <CloseButton onClick={onClose}>&times;</CloseButton>
            {children}
          </ModalContent>
        </ModalBackdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
