import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
