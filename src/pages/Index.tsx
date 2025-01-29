import React from 'react';
import Logo from '@/components/Logo';
import SearchBox from '@/components/SearchBox';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-quantum-dark flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <Logo />
        <SearchBox />
        <div className="mt-8 text-quantum-light/50 text-sm">
          Powered by QuantumFusion Technology
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Index;