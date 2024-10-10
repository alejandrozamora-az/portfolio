'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function init() {
    return (
        process.env.NODE_ENV === 'production' ?
            <>
                <Script
                    async
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />

                <Script id="gtag-script" dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
                }} />

                {Default()}

            </>
            : <></>
    );
};

export default function Default() {
    const pathname = usePathname();

    return (
        useEffect(() => {
            pageview(pathname);
        }, [pathname])
    );
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url, location) => {
    process.env.NODE_ENV === 'production' &&
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
            page_path: url,
            page_location: location
        });
};
