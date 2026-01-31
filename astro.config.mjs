// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Calineo',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/VulpesFabrica/calineo-site' }],
			sidebar: [
				{
					label: 'Calinéo',
					items: [
						{ label: 'Accueil', slug: '' },
						{ label: 'Mentions légales', slug: 'legal/mentions-legales' },
						{ label: 'CGU', slug: 'legal/conditions-utilisation' },
						{ label: 'Politique de confidentialité', slug: 'legal/politique-confidentialite' },
					],
				},
			],
		}),
	],
});
