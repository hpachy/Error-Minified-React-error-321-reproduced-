import Document, { Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';
import { Fragment } from 'react';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		// Check if in production
		const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';
		const initialProps = await Document.getInitialProps(ctx);
		// Pass isProduction flag back through props
		return { ...initialProps, isProduction };
	}

	setGoogleTags() {
		return {
			__html: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${GA_TRACKING_ID}');
		  `
		};
	}

	render() {
		// const { isProduction } = this.props;
		return (
			<html>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics
					{/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} /> */}
					{/* <script
						dangerouslySetInnerHTML={{
							__html: `
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-KXRW9SL');
          `
						}}
					/>  */}
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#000000" />
					<meta
						name="description"
						content="Walter Learning : des formations métiers à destination des professionnels en activité"
					/>
					<link
						rel="shortcut icon"
						href="https://walter-learning-public.s3.eu-west-3.amazonaws.com/static/favicons/favicon_walter_color.png"
						crossOrigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
						integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
						crossOrigin="anonymous"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* We only want to add the scripts if in production */}
					{/* {isProduction && ( */}
						<Fragment>
							<script async src={`"https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
							{/* We call the function above to inject the contents of the script tag */}
							<script dangerouslySetInnerHTML={this.setGoogleTags()} />
						</Fragment>
					{/* )} */}
				</body>
				<script
					src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
					integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
					crossOrigin="anonymous"
				></script>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
					integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
					crossOrigin="anonymous"
				></script>
				<script
					src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
					integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
					crossOrigin="anonymous"
				></script>
			</html>
		);
	}
}
