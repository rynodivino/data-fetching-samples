import React, { useEffect, useState } from 'react'
import { Box, Avatar } from 'grommet'
import { RANDOM_USER_API_ENDPOINT } from '../conf'

const Fetch = () => {
  const [userData, setUserData] = useState()
  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    try {
      getData(controller)
    } catch(e) {
      console.log(e)
    }

    return () => { controller.abort() }
    
  }, [])

  const getData = async (controller) => {
    const { signal } = controller
    try {
      const res = await fetch(RANDOM_USER_API_ENDPOINT, {
        signal
      })
      const json = await res.json()
      setUserData(json.results)
      setLoading(false)
    } catch(e) {
      console.log('e', e)
      setError(e.message)
      setLoading(false)
    }
  }

  if (loading) return <>loading</>
  if (error) return <>{error}</>

  return <Box>
    {Array.isArray(userData) && userData[0] && (
      <Box>
        <span role="heading" level='3'>hi {userData[0].login.username}</span>
        {/* <img src={userData[0].picture.medium} alt="user avatar" /> */}
        <Box direction="row"  gap="small">
          <Avatar src={userData[0].picture.medium} />   
        </Box>
      </Box>
    )
    }
  </Box>
}

export default Fetch