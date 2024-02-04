// eslint-disable-next-line import/no-extraneous-dependencies -- test dependencies
import reactPlugin from '@vitejs/plugin-react-swc'
// eslint-disable-next-line import/no-extraneous-dependencies -- test dependencies
import { defineProject } from 'vitest/config'

export default defineProject({
  plugins: [reactPlugin()],
  test: {
    globals: true,
    cache: false,
    environment: 'jsdom',
    css: true,
    mockReset: true,
  },
})
