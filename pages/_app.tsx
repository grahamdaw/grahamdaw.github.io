import '../styles/globals.css'
import { Grommet } from 'grommet'
import { theme } from '../constants/theme'
import type { AppProps /*, AppContext */ } from 'next/app'


function MyApp({ Component, pageProps }: AppProps)  {
  return (
    <Grommet theme={theme} full={true}> 
      <Component {...pageProps} />
    </Grommet>
  )
}

export default MyApp
