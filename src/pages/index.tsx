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
  const [value, setValue] = React.useState(50);
  const [innerDimensions, setInnerDimensions] = React.useState({
    height: 0,
    width: 0,
  });
  // const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      // console.log(e)
      // e.preventDefault();
      // setScrollY(window.scrollY);
      setValue((window.scrollY / (2000 - window?.innerHeight)) * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // window.addEventListener('DOMMouseScroll', handleScroll, false); // older FF
    // window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    // window.addEventListener('touchmove', handleScroll, wheelOpt); // mobile
    return () => {
      window.removeEventListener('DOMMouseScroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    setInnerDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-black text-white'>
          <div className='layout top-10 h-[2000px]'>
            {/* <div className=''> */}
            {/* <Vercel className='text-5xl' /> */}
            {/* <h1 className='mt-4 text-white'>
              Next.js + Tailwind CSS + TypeScript Starter
            </h1> */}
            {/* <button className='flex-1 rounded-lg border-2 border-white py-4 text-xl'>
                Test Button 1
              </button>
              <button className='flex-1 rounded-lg border-2 border-white py-4 text-xl'>
                Test Button 2
              </button>
              <button className='flex-1 rounded-lg border-2 border-white py-4 text-xl'>
                Test Button 3
              </button> */}

            {/* <label
                htmlFor='default-range'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Default range
              </label> */}
            <div className='mt-9'>
              {innerDimensions.height} | {innerDimensions.width}
            </div>
            <div
              className='fixed bottom-0 left-0 right-0'
              style={{ top: '280px' }}
            >
              <input
                id='default-range'
                type='range'
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
                // style={{
                //   marginTop: scrollY + 'px',
                // }}
              />
            </div>
            <div
              className='fixed top-0 left-0 right-0'
              style={{ bottom: '280px' }}
            >
              <input
                id='default-range-2'
                type='range'
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'
                // style={{
                //   marginTop: scrollY + 'px',
                // }}
              />
            </div>
          </div>

          {/* <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Theodorus Clarence
              </UnderlineLink>
            </footer> */}
          {/* </div> */}
        </section>
      </main>
    </Layout>
  );
}
