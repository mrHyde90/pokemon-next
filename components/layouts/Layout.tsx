import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon app'}</title>
        <meta name="author" content="Jose" />
        <meta name="description" content="Informacion" />
        <meta name="keywords" content="pokemon, pokedex" />
        <meta property="og:title" content={`Información sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />
      </Head>

      <Navbar />
      <main
        style={{
          padding: '0px 20px'
        }}
      >
        {children}
      </main>
    </>
  )
}
