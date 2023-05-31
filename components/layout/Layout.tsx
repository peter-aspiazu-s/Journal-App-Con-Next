import {FC, ReactNode} from 'react';
import Head from 'next/head';

interface Props {
    title: string;
    description: string;
    children: ReactNode;
}

export const Layout:FC<Props> = ({title, description, children}):JSX.Element => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Head>

        {children}
    </>
  )
}
