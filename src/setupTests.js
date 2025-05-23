import '@testing-library/jest-dom';

// Mock requestAnimationFrame
global.requestAnimationFrame = global.requestAnimationFrame || function (cb) {
  return setTimeout(cb, 16);
};

global.cancelAnimationFrame = global.cancelAnimationFrame || function (id) {
  clearTimeout(id);
};

// Mock ResizeObserver
global.ResizeObserver = global.ResizeObserver || class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};