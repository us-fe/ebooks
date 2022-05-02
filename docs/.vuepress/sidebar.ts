import * as YDKJSV1 from './sidebar/you-dont-know-js-v1';
import * as YDKJSV2 from './sidebar/you-dont-know-js-v2';
import * as PJFWDV4 from './sidebar/professional-javascript-for-web-developers-v4';

import { makeSidebar } from './util';

export const en = {
  [YDKJSV1.enPrefix]: makeSidebar(YDKJSV1.enData, YDKJSV1.enPrefix),
  [YDKJSV2.enPrefix]: makeSidebar(YDKJSV2.enData, YDKJSV2.enPrefix),
  [PJFWDV4.enPrefix]: makeSidebar(PJFWDV4.enData, PJFWDV4.enPrefix),
};

export const zh = {
  [YDKJSV1.zhPrefix]: makeSidebar(YDKJSV1.zhData, YDKJSV1.zhPrefix),
  [YDKJSV2.zhPrefix]: makeSidebar(YDKJSV2.zhData, YDKJSV2.zhPrefix),
  [PJFWDV4.zhPrefix]: makeSidebar(PJFWDV4.zhData, PJFWDV4.zhPrefix),
}

// console.log(en);