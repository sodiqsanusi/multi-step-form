import localFont from '@next/font/local';

const ubuntu = localFont({
  src: [
    {
      path: './Ubuntu-Regular.ttf',
      weight: 400,
      style: 'normal'
    },
    {
      path: './Ubuntu-Medium.ttf',
      weight: 500,
      style: 'normal'
    },
    {
      path: './Ubuntu-Bold.ttf',
      weight: 700,
      style: 'normal'
    }
  ]
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={ubuntu.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
