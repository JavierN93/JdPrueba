import Script from 'next/script';

export default function MouseFlow() {
  return (
    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `window._mfq = window._mfq || [];(function() {var mf = document.createElement("script");mf.type = "text/javascript"; mf.defer = true;mf.src = "//cdn.mouseflow.com/projects/758b415f-dab2-4209-817e-f3fe606168c6.js";document.getElementsByTagName("head")[0].appendChild(mf);})();`,
      }}
    />
  );
} 
