import '../styles/globals.css';
import Head from 'next/head';
import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={ubuntu.className}>
      <Head>
        <meta name='author' content='Sodiq Sanusi'/>
        <meta name='description' content='A multistep form, designs gotten from frontend mentors and implemented directly'/>
      </Head>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
