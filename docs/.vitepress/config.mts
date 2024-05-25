import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "Yiov",
  description: "敏而好学，不耻下问",

  // fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],

  base: '/', //网站部署到根目录

  //启用深色模式
  appearance:'dark',

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true, 
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },

  },


  //主题配置
  themeConfig: {

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '🐋 目录', link: '/guide/' },
      {
        //下拉菜单
        text: '其他站点',
        items: [
          { text: 'VitePress文档搭建', link: 'https://vitepress.yiov.top/' },
          { text: 'VuePress文档搭建', link: 'https://vuepress.yiov.top' },
          { text: '个人主页', link: 'https://yingyayi.com/' },
        ],
      },
    ],


    //侧边栏
    sidebar: [
      {
        //分组标题1
        text: '科学上网',
        items: [
          { text: '工具', 
            collapsed: true,
            items: [
              { text: '介绍(必看)', link: '/gfw/proxy' },
              { text: '圈X', link: '/gfw/quantumultX' },
              { text: 'BoxJS', link: '/gfw/boxjs' },
              { text: '小火箭', link: '/gfw/shadowrocket' },
              { text: 'Clash', link: '/gfw/Clash' },
              { text: 'WARP', link: '/gfw/warp' },
              { text: 'WireGuard', link: '/gfw/wireguard' },
              { text: 'sing-box', link: '/gfw/singbox' },
              { text: 'NekoBox', link: '/gfw/NekoBox' },
              { text: 'Karing', link: '/gfw/Karing' },
              { text: 'Hiddify', link: '/gfw/Hiddify' },
              { text: 'V2Ray', link: '/gfw/v2ray' },
            ],
          },
          { text: '机场(节点)', 
            collapsed: true,
            items: [
              { text: '机场', link: '/gfw/channel' },
              { text: '协议', link: '/gfw/protocol' },
            ],
          },

        ],
      },

      {
        //分组标题2
        text: '日常生活',
        collapsed: true,
        items: [
          { text: '微信刷步', link: '/daily/xmsb' },
          { text: '待产包', link: '/daily/bags-just-yet' },
          { text: '1688同源店', link: '/daily/1688' },
          { text: '买房及房产证', link: '/daily/house' },
          { text: '台州麻将', link: '/daily/mahjong' },
          { text: '车厘子', link: '/daily/cherries' },
          { text: '维生素', link: '/daily/vitamin' },
          { text: '血常规', link: '/daily/blood' },
        ],
      },

      {
        //分组标题3
        text: '工具使用', 
        collapsed: true,
        items: [
          { text: '电视TV', link: '/tools/tvapp' },
          { text: '提取icon', link: '/tools/icon' },
          { text: '书签同步', link: '/tools/bookmark' },
          { text: '微软TTS', link: '/tools/tts' },
          { text: 'crx插件', link: '/tools/crx' },
          { text: 'Markdown', link: '/tools/markdown' },
          { text: 'Pake', link: '/tools/pake' },
          { text: 'QQ邮箱', link: '/tools/qqmail' },
          { text: '油猴插件', link: '/tools/tampermonkey' },
          { text: 'Todesk', link: '/tools/todesk' },
          { text: 'VSCode', link: '/tools/VSCode' },
          { text: '企业微信推送', link: '/tools/wecom' },
          { text: '微PE', link: '/tools/wepe' },
          { text: '电脑常见问题', link: '/tools/win11' },
          { text: 'PS 2023', link: '/tools/ps' },
        ],
      },

      {
        //分组标题4
        text: '小米相关',
        items: [
          { text: '小米降级', link: '/mi/miui' },
          { text: '小米主题', link: '/mi/mi_theme' },
        ],
      },
      {
        //分组标题5
        text: 'iPhone玩机',
        items: [
          { text: '日常使用', 
            collapsed: true,
            items: [
              { text: '短信添加头像', link: '/iPhone/smscard' },
              { text: 'Reqable', link: '/mi/Reqable' },
              { text: 'Stream', link: '/iPhone/Stream' },
              { text: 'Apple ID', link: '/iPhone/Apple_ID' },
              { text: 'stay2', link: '/iPhone/stay2' },
            ],
          },
          { text: '签名工具', 
            collapsed: true,
            items: [
            { text: '使用介绍(必读)', link: '/iPhone/sign/' },
            { text: '巨魔助手', link: '/iPhone/sign/TrollStore' },
            { text: '轻松签', link: '/iPhone/sign/esign' },
            { text: '牛蛙助手', link: '/iPhone/sign/bullfrog' },
            { text: 'Sideloadly', link: '/iPhone/sign/Sideloadly' },
            ],
          },
          { text: '越狱工具', 
            collapsed: true,
            items: [
            { text: '使用介绍(必读)', link: '/iPhone/Jailbreak/' },
            { text: 'Dopamine', link: '/iPhone/Jailbreak/Dopamine' },
            { text: 'unc0ver', link: '/iPhone/Jailbreak/unc0ver' },
            { text: 'checkra1n', link: '/iPhone/Jailbreak/checkra1n' },
            { text: '搭建插件源', link: '/iPhone/Jailbreak/repo' },

            ],
          },
          { text: '其他工具', 
            collapsed: true,
            items: [
              { text: 'MDC工具', link: '/iPhone/mdc' },
              { text: 'KFD工具', link: '/iPhone/kfd' },
              { text: 'Filza破解', link: '/iPhone/Filza' },

            ],
          },
        ],
      },
      {
        //分组标题6
        text: 'Telegram',
        items: [
          { text: 'Telegram的注册及使用', link: '/telegram/tg/' },
          { text: '创建自己的tg私聊机器人 ', link: '/telegram/tgbot//' },
          { text: 'TG表情包下载与制作', link: '/telegram/sticker/' },
        ],
      },
      {
        //分组标题7
        text: '网站相关',
        items: [
          { text: '搭建网站', 
            collapsed: true,
            items: [
              { text: '服务器的购买及网站初成', link: '/website/ECS/' },
              { text: 'VM虚拟机安装centos系统', link: '/website/VMware/' },
              { text: 'Xshell终端连接服务器', link: '/website/Xshell/' },
              { text: 'linux安装宝塔面板', link: '/website/BT/' },
              { text: 'node.js的安装教程', link: '/website/nodejs/' },
              { text: 'Go环境的安装教程', link: '/website/go/' },
              { text: 'Docker的安装教程', link: '/website/docker/' },
              { text: 'dockerhub上传本地镜像', link: '/website/dockerhub/' },
              { text: '青龙面板的安装及使用', link: '/website/qinglong/' },
              { text: 'wordpress详细安装教程', link: '/website/wordpress/' },
              { text: 'Webstack导航从零搭建', link: '/website/WebStack/' },
              { text: '搭建Favicon图标API', link: '/website/Favicon/' },
              { text: 'Onenav导航网页的搭建', link: '/website/onenav/' },

              { text: 'Github', link: '/website/github' },
              { text: 'Git', link: '/website/git' },

              { text: 'Vercel', link: '/website/vercel/' },
              { text: '闲置iPhone搭建静态网站', link: '/website/ish/' },
              { text: 'GitLab的注册及使用', link: '/website/gitlab' },
              { text: 'Halo博客的搭建', link: '/website/Halo/' },
              { text: '各类主题/模板/源码汇总 ', link: '/website/source/' },

            ],
          },
          { text: '其他相关', 
            collapsed: true,
            items: [
              { text: '简单的个人主页搭建', link: '/website/home/' },
              { text: 'Portofolio个人主页搭建', link: '/website/Portofolio/' },
              { text: '搭建专属的记仇小本本', link: '/website/heng/' },
              { text: 'Alist搭建自己的专属网盘', link: '/website/Alist/' },
              { text: 'Centos系统切换图形界面', link: '/website/Centos/' },
              { text: '浅谈内网穿透', link: '/website/NAT/' },
              { text: 'Cloudflare', link: '/website/cloudflare' },
              { text: 'ClouDNS', link: '/website/cloudns' },
              { text: 'Replit', link: '/website/Replit' },
              { text: 'UptimeRobot ', link: '/website/uptimerobot' },
            ],
          },
        ],
      },
      {
        //分组标题8
        text: '其他站点',
        //collapsed: false,
        items: [
          { text: 'VitePress文档搭建', link: 'https://vitepress.yiov.top/' },
          { text: 'VuePress文档搭建', link: 'https://vuepress.yiov.top/' },
          { text: '个人主页', link: 'https://yingyayi.com/' },
        ],
      },
    ],
  



    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yiov/yiov.top' },
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    //页脚
    footer: {
      message: 'Power by <a href="https://github.com/yyx990803" target="_blank">VitePress(Evan You)</a>',
      copyright: 'Copyright © 2023 <a href="https://github.com/Yiov" target="_blank">Yiov</a>',
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲
    outline: { 
      level: [2,3], // 显示2-3级标题
      label: '当前页大纲' // 文字显示
    },


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

  },

  
  
})
