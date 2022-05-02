

import * as YDKJSV1 from './sidebar/you-dont-know-js-v1';
import * as YDKJSV2 from './sidebar/you-dont-know-js-v2';
import * as PJFWDV4 from './sidebar/professional-javascript-for-web-developers-v4';

import { makeNavbar } from './util';


export const en = [
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
        children: makeNavbar(YDKJSV1.enData, YDKJSV1.enPrefix)
      },
      {
        text: "V2",
        children: makeNavbar(YDKJSV2.enData, YDKJSV2.enPrefix)
      },

    ],

  },

  {
    text: "Professional Javascript for Web Developers V4",
    children: makeNavbar(PJFWDV4.enData, PJFWDV4.enPrefix)
  },

];

export const zh = [
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
        children: makeNavbar(YDKJSV1.zhData, YDKJSV1.zhPrefix)
      },
      {
        text: "V2",
        children: makeNavbar(YDKJSV2.zhData, YDKJSV2.zhPrefix)
      },

    ],

  },

  {
    text: "Professional Javascript for Web Developers V4",
    children: makeNavbar(PJFWDV4.zhData, PJFWDV4.zhPrefix)
  },
]

