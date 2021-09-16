import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../src/components/layout';
export default function FirstCard() {
  return (
    <Layout>

      <Head>
        <title>First Card</title>
      </Head>
      <h1>First Card</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

{/* for external routes outside of the Next.js app, use an <a> tag without `Link` */ }


{/* to add attributes such as className, target, rel, etc,
add them to the <a> tag, not the <Link> tag.
Example:

export default function LinkClassnameExample() {
  // To add attributes like className, target, rel, etc.
  // add them to the <a> tag, not to the <Link> tag.
  return (
    <Link href="/">
      <a className="foo" target="_blank" rel="noopener noreferrer">
        Hello World
      </a>
    </Link>
  )
}}
*/}