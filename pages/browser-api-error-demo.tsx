import type { NextPage } from 'next';
import BrowserAPIComponent from '../components/BrowserAPIComponent';

const BrowserAPIErrorDemo: NextPage = () => {
  return (
    <div>
      <h1>Browser API Error Demo</h1>
      <p>
        This page demonstrates what happens when browser APIs are accessed
        during SSR.
      </p>
      <p>
        If this component uses browser APIs directly (not in useEffect), it will
        cause SSR errors.
      </p>

      <BrowserAPIComponent />
    </div>
  );
};

export default BrowserAPIErrorDemo;
