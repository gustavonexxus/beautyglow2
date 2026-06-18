import React from 'react';

/**
 * Utility to render text, replacing any stylized serif ampersands ('&')
 * with a clean, classic sans-serif ampersand so it looks normal and balanced.
 */
export const formatAmpersand = (text: string | undefined): React.ReactNode => {
  if (!text) return '';
  if (!text.includes('&')) return text;
  
  const parts = text.split('&');
  return (
    <>
      {parts.flatMap((part, i) => 
        i === 0 
          ? [part] 
          : [
              <span key={`amp-${i}`} className="font-sans font-normal not-italic tracking-normal mx-1 text-inherit">&</span>, 
              part
            ]
      )}
    </>
  );
};
