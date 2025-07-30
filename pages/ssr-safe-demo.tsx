import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the ChatbotButton with SSR disabled
const ChatbotButton = dynamic(() => import('../components/ChatbotButton'), {
  ssr: false,
  loading: () => <div>Loading chatbot...</div>,
});

const SSRSafeDemo: NextPage = () => {
  return (
    <div>
      <h1>SSR Safe Demo</h1>
      <p>This page uses dynamic imports with SSR disabled to avoid errors.</p>
      <p>The ChatbotButton will only render on the client side.</p>

      {/* This is safe - component only renders on client */}
      <ChatbotButton />
    </div>
  );
};

export default SSRSafeDemo;
