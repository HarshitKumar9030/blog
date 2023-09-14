import type {PageConfig} from 'next';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {posts, sortPosts} from '../posts';
import {flatMap} from '../util/flat-map';

export const config: PageConfig = {
	unstable_runtimeJS: false,
};

export default function Home() {
	return (
		<main className="space-y-8">
			<h2>
				<span>blog.harshitkumar.tech</span>{' '}
				<a
					target="_blank"
					href="https://github.com/harshitkumar9030/blog"
					className="text-neutral-500 hover:text-blue-500"
					rel="noreferrer"
				>
					<span className="text-neutral-500 hover:text-neutral-500">-</span> github
				</a>
				{' '}
				<a
					target="_blank"
					href="https://x.com/@OhHarshit"
					className="text-neutral-500 hover:text-blue-500"
					rel="noreferrer"
				>
					<span className="text-neutral-500 hover:text-neutral-500">-</span> x
				</a>
				{' '}
				<a
					target="_blank"
					href="https://discord.com/channels/@me/896393055433785375"
					className="text-neutral-500 hover:text-blue-500"
					rel="noreferrer"
				>
					<span className="text-neutral-500 hover:text-neutral-500">-</span> discord
				</a>
			</h2>

			<ul className="space-y-1 list-disc list-inside">
				{flatMap(sortPosts(posts), post => {
					if (post.hidden) {
						return [];
					}

					return [
						<BlogLink key={post.slug} href={`/${post.slug}`}>
							{post.name}
						</BlogLink>,
					];
				})}
			</ul>
		</main>
	);
}

function BlogLink(props: {href: string; children: ReactNode}) {
	return (
		<li>
			<Link className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-600" href={props.href}>
				{props.children}
			</Link>
		</li>
	);
}
