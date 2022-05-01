import { path } from "@vuepress/utils";
import type { Theme } from "@vuepress/core";
import type { DefaultThemeOptions } from "@vuepress/theme-default";

const commentTheme: Theme<DefaultThemeOptions> = {
    name: "comment-theme",

    // we are extending @vuepress/theme-default
    extends: "@vuepress/theme-default",

    layouts: {
        // we overide the default layout to provide comment service
        Layout: path.resolve(__dirname, "layouts", "Layout.vue"),
    },

    plugins: [
        [
            "comment2",
            {

                comment: true,
                type: "giscus",
                repo: 'us-fe/ebooks',
                repoId: "R_kgDOHQs-GA",
                category: "Announcements",
                categoryId: "DIC_kwDOHQs-GM4CO312",
                mapping: "pathname",
                reactionsEnabled: true,
                inputPosition: "top",
                // clientId: '43a736117e3390b1549c',
                // clientSecret: 'a5a4990ad34fd6eea84e9592da69b364d099e9de',

            }
            ,
        ],
    ],
};

export default commentTheme;