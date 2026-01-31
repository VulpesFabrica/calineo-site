// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Calineo',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Calinéo',
					items: [
						{ label: 'Accueil', slug: '' },
						{ label: 'Mentions légales', slug: 'legal/mentions-legales' },
						{ label: 'CGU', slug: 'legal/conditions-utilisation' },
					],
				},
			],
		}),
	],
});
