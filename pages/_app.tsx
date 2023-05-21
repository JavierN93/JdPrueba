import type { AppProps } from 'next/app';
import 'swiper/swiper.min.css';
import '../styles/globals.css';
import { DialogProvider } from '../components/ui-kit/dialog/dialog-context';
import FacebookPixel from '../components/3rd-party/facebook-pixel';
import MouseFlow from '../components/3rd-party/mouse-flow';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DialogProvider>
      <Component {...pageProps} />
      <FacebookPixel />
      <MouseFlow />
    </DialogProvider>
  );
}

export default MyApp;
