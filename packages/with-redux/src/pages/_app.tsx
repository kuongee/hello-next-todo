// 참고: https://velog.io/@sbinha/Next.js-app.js에-대해서
// https://merrily-code.tistory.com/154

import '@/assets/styles/globals.scss';
import type { AppProps } from 'next/app';
import wrapper from '@/stores/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
