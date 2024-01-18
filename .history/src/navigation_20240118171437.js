import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Noticias',
      href: getBlogPermalink(),
      links: [
      ],
    },
    {
      text: 'Política de Privacidad',
       links: [title:'Política de Privacidad',href: '/privacy',
      ],
    },
  ],
  actions: [{ text: 'Comunicar Incidencia', href: 'https://incidencia.app', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: '', href: '' },
      ],
    },
  ],
  secondaryLinks: [

    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
    
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(#)]"></span>
    © 2024 <a class="text-blue-600 hover:underline dark:text-gray-200" href="#"> RuizLizondo</a> .
  `,
};