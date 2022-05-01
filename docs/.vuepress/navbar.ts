import { ThemeConfig } from "vuepress";



export const en: ThemeConfig = [
  {
    text: "US-FE",
    link: "https://us-fe.github.io",
  },
  {
    text: "Home",
    link: "/",
  },
  {
    text: "You Don't Know JS",
    children: [
      {
        text: "V1",
        children: [
          {
            text: 'Up & Going',
            link: "/en/you-dont-know-js-v1/up-going/ch1",
          },
          {
            text: 'Scope & Closures',
            link: "/en/you-dont-know-js-v1/scope-closures/ch1",
          },
          {
            text: 'This & Object Prototypes',
            link: "/en/you-dont-know-js-v1/this-object-prototypes/ch1",
          },
          {
            text: "Types & Grammar",
            link: "/en/you-dont-know-js-v1/types-grammar/ch1",
          },
          {
            text: "Async & Performance",
            link: "/en/you-dont-know-js-v1/async-performance/ch1",
          },
          {
            text: "ES6 & Beyond",
            link: "/en/you-dont-know-js-v1/es6-beyond/ch1",
          }
        ]
      },
      {
        text: "V2",
        children: [
          {
            text: 'Get Started',
            link: "/en/you-dont-know-js-v2/get-started/ch1",
          },
          {
            text: 'Scope & Closures',
            link: "/en/you-dont-know-js-v2/scope-closures/ch1",
          }
        ]
      },

    ],
  },

];

export const zh: ThemeConfig = [
  {
    text: "US-FE",
    link: "https://us-fe.github.io",
  },
  {
    text: "首页",
    link: "/",
  },
  {
    text: "You Don't Know JS",
    children: [
      {
        text: "V1",
        children: [
          {
            text: 'Up & Going',
            link: "/zh/you-dont-know-js-v1/up-going/ch1",
          },
          {
            text: 'Scope & Closures',
            link: "/zh/you-dont-know-js-v1/scope-closures/ch1",
          },
          {
            text: 'This & Object Prototypes',
            link: "/zh/you-dont-know-js-v1/this-object-prototypes/ch1",
          },
          {
            text: "Types & Grammar",
            link: "/zh/you-dont-know-js-v1/types-grammar/ch1",
          },
          {
            text: "Async & Performance",
            link: "/zh/you-dont-know-js-v1/async-performance/ch1",
          },
          {
            text: "ES6 & Beyond",
            link: "/zh/you-dont-know-js-v1/es6-beyond/ch1",
          }
        ]
      },
      {
        text: "V2",
        children: [
          {
            text: 'Get Started',
            link: "/en/you-dont-know-js-v2/get-started/ch1",
          },
          {
            text: 'Scope & Closures',
            link: "/en/you-dont-know-js-v2/scope-closures/ch1",
          }
        ]
      },

    ],
  },
]

