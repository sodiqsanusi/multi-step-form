import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={ubuntu.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
