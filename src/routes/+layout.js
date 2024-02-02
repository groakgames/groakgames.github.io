export const prerender = true;

import { base } from '$app/paths'

export const load = () => {
	return {
		title: "Groak Games",
		description: "The official Groak Games website!",
		icon: `${base}/favicon.ico`,
		header: {
			title: "Groak Games",
			link: "/",
			navigation: [
				{ name:"games", link:"/games" },
				{ name:"tools", link:"/tools" },
				{ name:"learn", link:"/learn" },
				{ name:"about", link:"/about" },
				{ name:"blog",  link:"/blog"  },
			]
		}
	};
};