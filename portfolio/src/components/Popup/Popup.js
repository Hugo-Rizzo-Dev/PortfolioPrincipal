import React, { useEffect, useState } from 'react';

const Popup = ({ message, type, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
    }, 3000); 


    const closeTimer = setTimeout(() => {
      onClose();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <div className={`popup ${type} ${fadeOut ? 'fade-out' : ''}`}>
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
