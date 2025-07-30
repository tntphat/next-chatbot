import type { NextPage } from 'next';

// This direct import will cause SSR errors
import FloatingButton from 'teko-chatbot-ui/dist/index.mjs';

const TestSSR: NextPage = () => {
  return (
    <div>
      <h1>SSR Error Test</h1>
      <p>This page should cause SSR errors in development mode.</p>
      <FloatingButton />
    </div>
  );
};

export default TestSSR;
