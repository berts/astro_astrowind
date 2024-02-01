import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
  
  ],
  actions: [{ text: 'Comunicar Incidencia', href: 'https://incidencia.app', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
       
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Comunicar Incidencia', href: 'https://incidencia.app', icon: 'tabler.alert-triangle', },
    
  ],
  socialLinks: [
    { ariaLabel: 'Incidencias', title:'Comunicar Incidencia', icon: 'tabler:alert-triangle', href: 'https://incidencia.app' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(#)]"></span>
    © 2024 <a class="text-blue-600 hover:underline dark:text-gray-200" href="/">RuizLizondo</a> .
  `,
};
