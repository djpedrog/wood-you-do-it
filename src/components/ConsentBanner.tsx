import React, { useState, useEffect } from 'react';

export function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // In a real app, you'd trigger GTM / AdSense load here
    window.location.reload(); 
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="bg-[#1F2937] border border-[#374151] px-6 py-4 rounded-full flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-[#F3F4F6]">
        <div className="flex-1 text-sm leading-relaxed">
          <p className="text-gray-300 text-xs">
            We use cookies for AdSense and analytics to enhance your browsing experience. Read our <a href="/cookie-policy" className="text-brand hover:text-brand-600 hover:underline">Cookie Policy</a>.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={handleReject}
            className="px-4 py-1.5 rounded-full border border-[#374151] hover:bg-[#374151] font-bold text-xs transition-colors"
          >
            Reject
          </button>
          <button 
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-full bg-white text-black font-bold text-xs hover:bg-gray-200 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
