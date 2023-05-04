import { type AppType } from 'next/dist/shared/lib/utils';
import Script from 'next/script';
import {Montserrat} from 'next/font/google'

import '~/styles/globals.css';
const montserrat = Montserrat({subsets: ['latin']})

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <div className={montserrat.className}>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-2BQ316HYBQ"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2BQ316HYBQ');
        `}
            </Script>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
