import React, { useEffect, useState } from 'react';

const BrowserAPIComponent = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const [localStorageData, setLocalStorageData] = useState<string | null>(null);

  useEffect(() => {
    // These browser APIs are only available on the client
    setWindowWidth(window.innerWidth);
    setLocalStorageData(localStorage.getItem('test'));
  }, []);

  return (
    <div>
      <h3>Browser API Component</h3>
      <p>Window width: {windowWidth}</p>
      <p>Local storage data: {localStorageData}</p>
    </div>
  );
};

export default BrowserAPIComponent;
