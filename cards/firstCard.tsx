import Link from 'next/link';

export default function FirstCard() {

  return (
    <>
      <h1>FUGP.</h1>
      <h2>
        <Link href="/">
          <a>go home, pal</a>
        </Link>
      </h2>
    </>
  );

}