// utils/gtag.ts

export const gtag_report_conversion = (url?: string): boolean => {
  const callback = function () {
    if (url) {
      window.location.href = url;
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17538731152/uxJ9CL-8k5sbEJCZj6tB',
      value: 1.0,
      currency: 'INR',
      event_callback: callback
    });
  }
  return false;
};


