import Router from 'next/router';

import React, { useEffect, ReactElement } from 'react';

import { AppProps } from 'next/app';
import * as gtag from '../lib/gtag';

export default function App({ Component, pageProps }: AppProps): ReactElement {
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		Router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			Router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);

	return <Component {...pageProps} />;
}
