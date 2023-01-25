import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
  </body> {
       background-image: url(https://cdn1.epicgames.com/ue/product/Screenshot/01-1920x1080-e9b162d2ad3168704376ab55e1088891.jpg?resize=1&w=1920);</style>
	   

</body>

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Kiss My Ass" />
        <p className="description">
                          </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
