import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { RANDOM_USER_API_ENDPOINT } from '../conf'
import Swr from './Swr'
import { rest } from 'msw'

test('renders img once fetched', async () => {
  render(<Swr />)
  await waitForElementToBeRemoved(() => screen.getByText("loading..."))
  expect(await screen.findByText(/hello dane\!/)).toBeInTheDocument()
})

