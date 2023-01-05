import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NewBg from '../public/NewBg.jpg'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const styles = {
    paperContainer: {
      zIndex: 1,
      height: '650px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minWidth: 'fit-content',
      
      backgroundPosition: 'center',
      backgroundImage: `url(${NewBg.src})`,
    },


  };
  return (
    // <div style={styles.paperContainer}>
    <>
      <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title>คาร์บอนฟุตพริ้นท์
                </title>
                <meta
                    name="description"
                    content=" โครงการส่งเสริมภาพลักษณ์ของ คาร์บอนฟุตพริ้นท์ สนับสนุนโดย มพ.."
                />
                <meta name="keywords" content="halalgreenworld,greenworld,halal-greenworld" />
                <meta name="apple-mobile-web-app-title" content="โครงการวิจัยเพื่อสนับสนุนการพัฒนาเมืองท้องถิ่นและกลไกเติบโตใหม่ CDC" />
                <meta name="format-detection" content="telephone=no"></meta>
                {/* <link rel="canonical" href="https://www.halalgreenworld.com/" /> */}
                <meta name="viewport" content="width=976" />
                <meta property="og:title" content="โครงการวิจัยเพื่อสนับสนุนการพัฒนาเมืองท้องถิ่นและกลไกเติบโตใหม่ CDC" />
                <meta property="og:description" content="โครงการส่งเสริมภาพลักษณ์ของ คาร์บอนฟุตพริ้นท์ สนับสนุนโดย มพ." />
                <meta property="og:locale" content="th" />
                <meta property="og:site_name" content="โครงการวิจัยเพื่อสนับสนุนการพัฒนาเมืองท้องถิ่นและกลไกเติบโตใหม่ CDC" />
                {/* <meta property="og:url" content="https://halalgreenworld.com/" /> */}
                <meta property='og:image:width' content='200' />
                <meta property='og:image:height' content='200' />
                <meta property="og:type" content='website' />
                <meta name="google-site-verification" content="zEi3g-ybmw1t0gkY75VHpL8RKMVfuNLFQEfk33AY500" />
                <meta name="twitter:site" content="@twitter" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="โครงการวิจัยเพื่อสนับสนุนการพัฒนาเมืองท้องถิ่นและกลไกเติบโตใหม่ CDC" />
                <meta name="twitter:description" content="โครงการส่งเสริมภาพลักษณ์ของ คาร์บอนฟุตพริ้นท์ สนับสนุนโดย มพ." />
                <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet" />
            </Head>
    <Component {...pageProps} />
    </>
      
  //  </div>
   
  )
}

export default MyApp
