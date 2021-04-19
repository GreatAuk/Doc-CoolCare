// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'Menu-1',
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '分组1',
        items: [
          { text: 'Menu-1-1', link: '/pages/d96097/' },
          { text: 'Menu-1-2', link: '/pages/8ddaa1/' },
        ],
      },
      {
        text: '分组2',
        items: [
          { text: '《JavaScript教程》笔记', link: '/note/javascript/' },
        ],
      },
    ],
  },
  { text: '更新日志',
    link: '/release_note/',
    items: [
      { text: 'Web', link: '/pages/ceec85/' },
      { text: 'App', link: '/pages/a4cad1/' },
    ],
  },
  { text: '关于', link: '/about/' }
]
