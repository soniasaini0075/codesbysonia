module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
  '\\.(css|scss)$': 'identity-obj-proxy',
  '^swiper/react$': '<rootDir>/__mocks__/swiperReactMock.js',
  '^swiper/modules$': '<rootDir>/__mocks__/swiperModulesMock.js',
  '^swiper/css$': '<rootDir>/__mocks__/styleMock.js',
},
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(swiper|ssr-window|dom7)/)',
  ],
};