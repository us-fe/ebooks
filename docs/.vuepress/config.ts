// import { defineUserConfig } from 'vuepress'
// import type { DefaultThemeOptions } from 'vuepress'
// import { comment, GiscusOptions } from "vuepress-plugin-comment2";
import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import { copyCode } from "vuepress-plugin-copy-code2";
import { copyright } from "vuepress-plugin-copyright2";
import { mdEnhance } from "vuepress-plugin-md-enhance";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default defineUserConfig({
  // base: '/ebooks/',
  // we are using a custom theme adding this plugin
  theme: path.resolve(__dirname, "./theme"),
  title: "US-FE",
  description: "US-FE eBoks",

  // site-level locales config
  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: "US-FE",
      description: "US-FE eBoks",

    },
    '/en/': {
      lang: 'en-US',
      title: "US-FE",
      description: "US-FE eBoks",
    },
  },

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",

    sidebar: sidebar.en,
    navbar: navbar.en,
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: "us-fe/ebooks",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    docsDir: "/docs/",
    locales: {
      '/en/': {
        selectLanguageName: 'English',
        sidebar: sidebar.en,
        navbar: navbar.en,
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        sidebar: sidebar.zh,
        navbar: navbar.zh,
      },
    },
  },

  plugins: [
    copyCode({
      // 插件选项
    }),
    copyright({
      // 插件选项
    }),
    mdEnhance({
      enableAll: true,
    }),
  ],
});
