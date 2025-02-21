import { defineConfigWithTheme } from 'vitepress'

import escookConfig from '@escook/vitepress-theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  extends: escookConfig,
  title: "Peak的文档知识库",
  description: "A VitePress Site",
  themeConfig: {
    musicBall: {
      src: 'https://m801.music.126.net/20250221114536/9094a04323ad2b2249a9c23840622aaa/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/34566871844/2a6b/12ff/c278/14fb9b46e7099c9302e8e26c1f1d46ab.mp3?vuutv=0k9hAhcY2yPM7oKRRloth89JnKMHMvmUFL4iJwlkH8t3gPenrYo7Sigazf/U6q+VHWIr3yLSYQjW2log4S/G6Xkg6z+XFF67s7Qq+FoqUP0='
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端知识库', link: '/markdown-examples' },
      { text: '后端知识库', link: '/markdown-examples' },
      { text: '计算机基础', link: '/markdown-examples' },
      { text: '开源经历', link: '/markdown-examples' },
      { text: '教程', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
