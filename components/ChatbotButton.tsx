import React from 'react';
import FloatingChatbot from 'teko-chatbot-ui/dist/index.mjs';
import 'teko-chatbot-ui/dist/index.css';

const ChatbotButton = () => {
  const addToCart = () => {};
  return (
    <FloatingChatbot
      onAddToCart={addToCart}
      zaloContactLink='https://zalo.me/1628468992301153938'
      terminalId={26605}
      aiAgentCode='SGC'
      lng={'vi'}
    />
  );
};

export default ChatbotButton;
