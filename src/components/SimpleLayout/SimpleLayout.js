// src/components/SimpleLayout/SimpleLayout.js
import React from 'react';

const SimpleLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {children}
    </div>
  );
};

export default SimpleLayout;
