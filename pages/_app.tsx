import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NewBg from '../public/NewBg.jpg'

function MyApp({ Component, pageProps }: AppProps) {
  const styles = {
    paperContainer: {
      zIndex: 1,
      height: '750px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minWidth: 'fit-content',
      
      backgroundPosition: 'center',
      backgroundImage: `url(${NewBg.src})`,
    },


  };
  return (
    <div style={styles.paperContainer}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
