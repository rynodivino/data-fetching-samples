import useSWR from 'swr'
import { RANDOM_USER_API_ENDPOINT } from '../conf'

const fetcher = (url) => fetch(url).then((res) => res.json());

function SWR() {
  const { data, error } = useSWR(RANDOM_USER_API_ENDPOINT, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.results[0].login.username}!</div>
}

export default SWR