import type { NextPage } from 'next';

const RealSSRTest: NextPage = () => {
  // This will cause SSR errors - accessing browser APIs directly
  const userAgent = navigator.userAgent;
  const screenWidth = screen.width;
  const localStorageData = localStorage.getItem('test');

  return (
    <div>
      <h1>Real SSR Error Test</h1>
      <p>This should cause SSR errors by accessing browser APIs directly.</p>
      <p>User Agent: {userAgent}</p>
      <p>Screen Width: {screenWidth}</p>
      <p>Local Storage: {localStorageData}</p>
    </div>
  );
};

export default RealSSRTest;
