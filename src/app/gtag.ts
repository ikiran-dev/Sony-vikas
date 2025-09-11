// utils/gtag.ts

export const gtag_report_conversion = (url?: string): boolean => {
  const callback = function () {
    if (url) {
      window.location.href = url;
    }
  };

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-16835133025/7ov1CNyyp5QaEOH8zts-',
      value: 1.0,
      currency: 'INR',
      event_callback: callback
    });
  }
  return false;
};


