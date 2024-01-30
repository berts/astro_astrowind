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
      text: 'Textos Legales',
       links: [
        {
          text: 'Política de Cookies',
          href: getPermalink('/legal/cookies'),
        },
       {
        text: 'Política de Privacidad',
          href: getPermalink('/legal/privacidad'),
        },
       {
        text: 'Aviso Legal',
        href: getPermalink('/legal/aviso_legal'),
      },
      ],
    },
  ],
  actions: [{ text: '<svg class="h-12 w-12 text-red-300"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />  <line x1="12" y1="9" x2="12" y2="13" />  <line x1="12" y1="17" x2="12.01" y2="17" /></svg> Comunicar Incidencia', href: 'https://incidencia.app', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        {
          text: 'Política de Cookies',
          href: getPermalink('/legal/cookies'),
        },
       {
        text: 'Política de Privacidad',
          href: getPermalink('/legal/privacidad'),
        },
       {
        text: 'Aviso Legal',
        href: getPermalink('/legal/aviso_legal'),
      },
      ],
    },
  ],
  secondaryLinks: [

    { text: 'Noticias', href: getPermalink('/noticias') },
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
