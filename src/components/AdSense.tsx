import React, { useEffect, useState } from 'react';

export function AdSense({ slot, format = 'auto', responsive = 'true' }: { slot?: string, format?: string, responsive?: string }) {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    // Check consent state
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      setConsentGranted(true);
    }
  }, []);

  if (!consentGranted) {
    return null; // Don't load ads if consent is missing
  }

  return (
    <div className="w-full bg-[#1F2937]/30 border-2 border-dashed border-[#374151] flex flex-col items-center justify-center min-h-[120px] my-8 rounded-2xl overflow-hidden relative">
      <div className="flex flex-col items-center justify-center opacity-50 space-y-1">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">Advertisement</span>
          <span className="text-xs text-gray-500 font-mono italic">AdSense Slot {slot && `(${slot})`}</span>
      </div>
      
      {/* 
        This is where the real ad code would go.
        e.g.,
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive={responsive}></ins>
      */}
    </div>
  );
}
