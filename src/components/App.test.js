import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('render fetch component', async () => {
  render(<App />);
  const fetchButton = screen.getByText('Fetch')
  fireEvent.click(fetchButton)
  await screen.findByText('... fetching')
  await screen.findByText('loading')
  const avatar = await screen.findByText('hi dane')
  expect(avatar).toBeInTheDocument()
});
