import 'tailwindcss/tailwind.css';
import '../styles/main.css';

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {ExternalLink} from '../client/components/external-link';

const footerLink =
	'underline text-sm decoration-blue-500/20 hover:decoration-blue-500/50 text-neutral-400 dark:text-neutral-700';

export default function App({Component, pageProps, router}: AppProps) {
	return (
		<div className="py-24 px-4">
			<Head>
				<title>harshit • blog</title>
			</Head>

			<div className="space-y-24 max-w-prose mx-auto">
				<Component {...pageProps} />

				<footer>
					<p className="space-x-2">
						<span className="text-neutral-400 dark:text-neutral-700">→</span>

						<ExternalLink href="https://harshitkumar.tech" className={footerLink}>
							Harshit
						</ExternalLink>
					</p>
				</footer>
			</div>
		</div>
	);
}
