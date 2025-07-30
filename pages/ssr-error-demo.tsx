import type { NextPage } from 'next';
import ChatbotButton from '../components/ChatbotButton';

const SSRErrorDemo: NextPage = () => {
  return (
    <div>
      <h1>SSR Error Demo</h1>
      <p>
        This page will cause SSR errors because ChatbotButton is imported and
        used directly.
      </p>
      <p>
        The FloatingButton component likely uses browser APIs that aren&apos;t
        available during SSR.
      </p>

      {/* This will cause SSR errors if FloatingButton uses browser APIs */}
      <ChatbotButton />
    </div>
  );
};

export default SSRErrorDemo;
