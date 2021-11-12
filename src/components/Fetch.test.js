import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import Fetch from './Fetch';

test('renders img once fetched', async () => {
  render(<Fetch />)
  await waitForElementToBeRemoved(() => screen.getByText("loading"))
  expect(await screen.findByText('hi dane')).toBeInTheDocument()
})
