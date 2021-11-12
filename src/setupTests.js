// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { RANDOM_USER_API_ENDPOINT } from './conf'

const server = setupServer(
  rest.get(RANDOM_USER_API_ENDPOINT, (req, res, ctx) => {
    return res(ctx.json({
      results: [{
      login: {
        username: 'dane'
      },
      picture: {
        medium: 'https://dane.it'
      }
    }]}))
  })
)
  
beforeAll(()=> server.listen())
afterEach(()=> server.resetHandlers())
afterAll(()=> server.close())
