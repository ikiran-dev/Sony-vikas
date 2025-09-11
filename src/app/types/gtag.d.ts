// types/gtag.d.ts

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void; // Define the 'gtag' function on the global window object
  }
}

export {};
