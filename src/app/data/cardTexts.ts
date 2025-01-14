import { CardText, CardTextAndDetails } from '../models/cardTexts..model';

export const reasonsCards: CardText[][] = [
  [
    { type: 'small-text', text: 'Tu página sirve como ' },
    { type: 'mid-text', text: 'punto de encuentro ' },
    { type: 'small-text', text: '24/7 con tus ' },
    { type: 'remarked-text', text: 'beneficiarios' }
  ],
  [
    {
      type: 'small-text',
      text: 'Tendrás una '
    },
    {
      type: 'mid-text',
      text: 'carta de presentación '
    },
    {
      type: 'small-text',
      text: 'a '
    },
    { type: 'remarked-text', text: 'colaboradores ' },
    { type: 'small-text', text: 'potenciales de cualquier lugar' }
  ],
  [
    { type: 'small-text', text: 'Tu web es una ' },
    { type: 'mid-text', text: 'evidencia ' },
    { type: 'small-text', text: 'más de tu ' },
    { type: 'remarked-text', text: 'transparencia ' },
    { type: 'small-text', text: 'y te facilitará el ' },
    { type: 'mid-text', text: 'acceso a subvenciones' }
  ]
];

export const pricesCards: CardTextAndDetails[] = [
  {
    text: [
      { type: 'remarked-text', text: 'Página Básica' },
      { type: 'mid-text', text: '800 €' },
      { type: 'small-text', text: 'Única página (como esta)' }
    ],
    details: [
      'Todo el contenido en una página',
      'Encabezado y pie de página',
      'Todas las secciones necesarias',
      'Simplifica la navegación si no necesitas páginas específicas',
      'Optimización SEO para aparecer en búsquedas de Google'
    ]
  },
  {
    text: [
      { type: 'remarked-text', text: 'Página Estándard' },
      { type: 'mid-text', text: '1.000 €' },
      { type: 'small-text', text: 'Web con 4-5 páginas y menú de navegación' }
    ],
    details: [
      'Página de inicio y otras páginas necesarias',
      'Por ejemplo, Nosotros, Proyectos, Transparencia',
      'Menú superior, lateral o/y en pie de página',
      'Permite ampliar informaicón o profundizar en contenidos',
      'Optimización SEO para aparecer en búsquedas de Google'
    ]
  },
  {
    text: [
      { type: 'remarked-text', text: 'Página Full' },
      { type: 'mid-text', text: '1.200 €' },
      { type: 'small-text', text: 'Web con 4-5 páginas y menú de navegación + blog' }
    ],
    details: [
      'Página de inicio y otras páginas necesarias',
      'Blog de actualidad u otros contenidos',
      'Se recomienda blog si se va a actualizar con regularidad',
      'Un blog es una vía más para atraer usuarios a una web',
      'Optimización SEO para aparecer en búsquedas de Google'
    ]
  }
];
