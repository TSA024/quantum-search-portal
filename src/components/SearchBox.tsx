import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast({
        title: "Please enter a search term",
        variant: "destructive",
      });
      return;
    }

    window.open(
      `https://cse.google.com/cse?cx=a49158225b6a74209#gsc.tab=${encodeURIComponent(query)}`,
      "_blank",
      "width=800,height=600,resizable=yes,scrollbars=yes"
    );
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type anything you'd like..."
          className="w-full px-6 py-4 text-lg bg-white/10 border border-quantum-accent/20 rounded-full 
                   text-quantum-light placeholder:text-quantum-light/50 outline-none
                   focus:border-quantum-accent transition-all duration-300
                   hover:border-quantum-accent/50"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                   bg-quantum-accent text-quantum-light hover:bg-quantum-accent/80
                   transition-all duration-300"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;