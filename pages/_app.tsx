import '../styles/globals.css'
import {AppProps} from "next/app";
import {QueryClient, QueryClientProvider} from "react-query";


const client = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
     return (
          <QueryClientProvider client={client}>
               <Component {...pageProps} />
          </QueryClientProvider>
     )
}

export default MyApp
