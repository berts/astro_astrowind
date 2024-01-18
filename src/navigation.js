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
  actions: [{ text: 'Comunicar Incidencia', href: 'https://incidencia.app', target: '_blank' }],
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
    
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(#)]"></span>
    © 2024 <a class="text-blue-600 hover:underline dark:text-gray-200" href="#"> RuizLizondo</a> .
  `,
};
