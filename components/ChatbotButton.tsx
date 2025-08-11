import React from 'react';
import FloatingChatbot from 'teko-chatbot-ui/dist/index.mjs';
import 'teko-chatbot-ui/dist/index.css';

const ChatbotButton = () => {
  const addToCart = () => {};
  const userId =
    typeof window !== 'undefined' ? (window as any).kk || 'customer' : '';
  return (
    <FloatingChatbot
      onAddToCart={addToCart}
      getUserId={() => userId || ''}
      zaloContactLink='https://zalo.me/1628468992301153938'
      terminalId={26605}
      aiAgentCode='SGC'
      lng={'vi'}
    />
  );
};

export default ChatbotButton;
