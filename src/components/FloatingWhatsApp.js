// src/components/FloatingWhatsApp.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const ChatBubble = styled(motion.div)`
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 1.2rem 1.4rem;
  width: 290px;
  color: var(--text-main);
  font-size: 0.9rem;
`;

const BubbleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 1rem;
`;

const TailorStatus = styled.div`
  display: flex;
  flex-direction: column;
  span.name {
    font-weight: 700;
    color: var(--text-main);
    font-size: 0.95rem;
  }
  span.status {
    font-size: 0.75rem;
    color: var(--primary-emerald);
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
    &::before {
      content: '';
      width: 6px;
      height: 6px;
      background: var(--primary-emerald);
      border-radius: 50%;
    }
  }
`;

const QuickActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #25D366;
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-top: 0.8rem;
  transition: transform 0.2s ease, filter 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
  }
`;

const TriggerButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25D366;
  border: 3px solid #FFFFFF;
  color: white;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
`;

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '94775532642';
  const defaultMsg = encodeURIComponent("Hello Royj Tailors, I want to ask about custom cargo pants, shirts, shorts, or school uniforms.");

  return (
    <FloatWrapper>
      <AnimatePresence>
        {isOpen && (
          <ChatBubble
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <BubbleHeader>
              <Avatar>RT</Avatar>
              <TailorStatus>
                <span className="name">Royj Tailors Wattala</span>
                <span className="status">Online - Ask a Question</span>
              </TailorStatus>
            </BubbleHeader>
            <p style={{ margin: 0, lineHeight: '1.4', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              "Hi! Need custom dark green cargo pants, school uniforms, shirts, or shorts? Message us directly!"
            </p>
            <QuickActionButton href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Start WhatsApp Chat
            </QuickActionButton>
          </ChatBubble>
        )}
      </AnimatePresence>

      <TriggerButton
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Royj Tailors on WhatsApp"
      >
        {isOpen ? <FaTimes /> : <FaWhatsapp />}
      </TriggerButton>
    </FloatWrapper>
  );
};

export default FloatingWhatsApp;
