import '../src/styles/globals.css';
import 'src/styles/tailwind.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}




// // import '../styles/globals.css'
// // import type { AppProps } from 'next/app'

// // function MyApp({ Component, pageProps }: AppProps) {
// //   const getLayout = Component.layout || ((page) => page);
// //   return getLayout(<Component {...pageProps} />)
// // }
// // export default MyApp


// import type { ReactElement, ReactNode } from 'react';
// import type { NextPage } from 'next';
// import type { AppProps } from 'next/app';

// //  new type created to include multiple layout pages in app
// type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// }

// // AppProps that overrides Component
// // (to use created NextPageWithLayout type)
// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// }

// // export default function VGKApp({ Component, pageProps }: AppPropsWithLayout) {
// //   // use layout defined at the page level if possible
// //   const getLayout = Component.getLayout ?? ((page) => page);

// //   return getLayout(<Component {...pageProps} />)
// // }





