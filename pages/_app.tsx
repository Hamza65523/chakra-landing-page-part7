import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Seo from './Seo'
function MyApp({ Component, pageProps  }: AppProps) {
  return(
    <>
       <Component {...pageProps}/>
    </>
     )

}

export default MyApp
