import Head from 'next';
import Image from 'next/image';
import Link from 'next/link';




export default function Layout({ children }) {

  return <div className={''}>{children}</div>
}

export const siteTitle = 'VGK Lifestyle';
// export default function Layout({ }) {
//   const home = {
//     "title": ''
//   }
//   const children = '';
//   return (
//     <div className={styles}>
//       <Head>
//         {/* meta */}
//         <meta name="VGK Lifestyle" content="Social news and updates from the VGK and fans" />
//         <meta property="og:image" content={`get link`} />
//         <meta property="og:title" content={siteTitle} />
//       </Head>
//       <header className={styles}>
//         {
//           <>
//             <div>{home}</div>
//             <Link href="/">
//               <a>
//                 <Image alt={''} src={''}></Image>
//               </a>
//             </Link>

//           </>
//         }
//       </header>
//       <main>
//         {children}
//         {/* <card></card> */}
//       </main>
//       <footer></footer>



//     </div>
//   )
// }

// export { };


// for reference:
/**
 *
 * Changes:
meta tags (like og:image), which are used to describe a page's content
Boolean home prop which will adjust the size of the title and the image
“Back to home” link at the bottom if home is false
Added images with next/image, which are preloaded with the priority attribute


import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
 */