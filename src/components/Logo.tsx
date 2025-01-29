import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative animate-pulse-subtle">
        <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-quantum-accent to-purple-500 bg-clip-text text-transparent">
          QuantumFusion
        </div>
        <div className="text-sm md:text-base text-quantum-light/70 mt-2">
          The Sky's the Limit
        </div>
      </div>
    </div>
  );
};

export default Logo;