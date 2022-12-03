import * as React from 'react';

import Layout from '@/components/layout/Layout';
// import ArrowLink from '@/components/links/ArrowLink';
// import ButtonLink from '@/components/links/ButtonLink';
// import UnderlineLink from '@/components/links/UnderlineLink';
// import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-black text-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            {/* <Vercel className='text-5xl' /> */}
            {/* <h1 className='mt-4 text-white'>
              Next.js + Tailwind CSS + TypeScript Starter
            </h1> */}
            <div className='w-full flex-col space-y-3'>
              <button className='flex-1 rounded-lg border-2 border-white py-2 text-xl'>
                Test Button 1
              </button>
              <button className='flex-1 rounded-lg border-2 border-white py-2 text-xl'>
                Test Button 2
              </button>
              <button className='flex-1 rounded-lg border-2 border-white py-2 text-xl'>
                Test Button 3
              </button>
            </div>
            {/* <p className='mt-2 text-sm text-gray-800'>
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See the repository
              </ArrowLink>
            </p>

            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink> */}

            {/* <UnstyledLink
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
              className='mt-4'
            > */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img
                width='92'
                height='32'
                src='https://vercel.com/button'
                alt='Deploy with Vercel'
              /> */}
            {/* </UnstyledLink> */}

            {/* <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Theodorus Clarence
              </UnderlineLink>
            </footer> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
