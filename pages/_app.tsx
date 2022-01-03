import { AppProps } from 'next/app'
import '../styles/sb-admin-2.css'

const App:React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
  }

export default App