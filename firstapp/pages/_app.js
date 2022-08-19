import Layout from '../component/Layout'
import '../styles/globals.css'

//Pretty much the layout component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component{...pageProps}/>
    </Layout>
  )
}

export default MyApp
