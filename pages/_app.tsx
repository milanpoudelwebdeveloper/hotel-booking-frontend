import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './../styles/index.css'
import './../styles/search.css'
import { Provider } from 'react-redux'
import { store } from '../app/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
