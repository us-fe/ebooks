export const enData = [
    // {
    //     text: "README",
    //     link: ``,
    // },
    // {
    //     text: "Preface",
    //     link: `preface`,
    // },
    {
        text: "Get Started",
        prefix: `get-started/`,
        collapsible: true,
        children: [
            {
                text: 'README',
                link: '',
            },
            // {
            //     text: 'Foreword',
            //     link: 'foreword',
            // },
            // {
            //     text: 'TOC',
            //     link: 'toc',
            // },
            {
                text: 'Chapter 1: What *Is* JavaScript?',
                link: 'ch1',
            },
            {
                text: 'Chapter 2: Surveying JS',
                link: 'ch2',
            },
            {
                text: 'Chapter 3: Digging to the Roots of JS',
                link: 'ch3',
            },
            {
                text: 'Chapter 4: The Bigger Picture',
                link: 'ch3',
            },
            {
                text: 'Appendix A: Exploring Further',
                link: 'apA'
            },
            {
                text: 'Appendix B: Practice, Practice, Practice!',
                link: 'apB'
            }
        ],
    },
    {
        text: "Scope & Closures",
        prefix: 'scope-closures/',
        collapsible: true,
        children: [
            {
                text: 'README',
                link: '',
            },
            // {
            //     text: 'Foreword',
            //     link: 'foreword',
            // },
            {
                text: 'TOC',
                link: 'toc',
            },
            {
                text: 'Chapter 1: What\'s the Scope?',
                link: 'ch1',
            },
            {
                text: 'Chapter 2: Illustrating Lexical Scope',
                link: 'ch2',
            },
            {
                text: 'Chapter 3: The Scope Chain',
                link: 'ch3',
            },
            {
                text: 'Chapter 4: Around the Global Scope',
                link: 'ch4',
            },
            {
                text: 'Chapter 5: The (Not So) Secret Lifecycle of Variables',
                link: 'ch5',
            },
            {
                text: 'Chapter 6: Limiting Scope Exposure',
                link: 'ch6',
            },
            {
                text: 'Chapter 7: Using Closures',
                link: 'ch7',
            },
            {
                text: 'Chapter 8: The Module Pattern',
                link: 'ch8',
            },
            {
                text: 'Appendix A: Exploring Further',
                link: 'apA',
            },
            {
                text: 'Appendix B: Practice',
                link: 'apB',
            },
        ],
    }
];
export const zhData = enData;

export const enPrefix = '/en/you-dont-know-js-v2/';
export const zhPrefix = '/zh/you-dont-know-js-v2/';
