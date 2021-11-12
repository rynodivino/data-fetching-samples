import React, { lazy, useState, Suspense } from 'react'
import { Box, Button, Heading, Header, Main } from 'grommet'
import './App.css'

const Fetch = lazy(() => import('./Fetch'))
const StaleWhileRevalidate = lazy(() => import('./Swr'))

function App() {
  const [method, setMethod] = useState()
  return (
    <div className="App">
      <Header>
        <Heading level={2} size='small'>Welcome to the data fetching demo</Heading>
        <Box gap="small" direction="row">
          <Box direction="column">
            <Button primary onClick={() => {
                setMethod('fetch')
              }} label="Fetch">
            </Button>
          </Box>
          <Box direction="column">
            <Button onClick={() => {
                setMethod('swr')
              }} label="SWR">
            </Button>
          </Box>
        </Box>
      </Header>
      <Main>
        <Box pad='medium' direction="column">
          { method && method === 'fetch' && (
            <Suspense fallback='... fetching'>
              <Fetch />
            </Suspense>
          )}
          { method && method === 'swr' && (
            <Suspense fallback='... swring'>
              <StaleWhileRevalidate />
            </Suspense>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
