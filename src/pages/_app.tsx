import { type AppType } from 'next/dist/shared/lib/utils';
import Script from 'next/script';

import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <>
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
        </>
    );
};

export default MyApp;
