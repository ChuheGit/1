## 简介

- 薅羊毛自动任务合集，具体实现过程如获取 cookie 方式和活动入口等需参照脚本内或源项目地址说明。

## 使用说明

### Surge

- #### 添加 Module

  - 任务合集（包含下方整个资源列表）

    `https://raw.githubusercontent.com/ChuheGit/1/main/Surge/Module/Task.sgmodule`

  - 京东合集（仅包含京东任务）

    `https://dove.589669.xyz/subfilter?filter=jd_%7Cjx_%7CJD&inline=1&sub=https://raw.githubusercontent.com/ChuheGit/1/main/Surge/Module/Task.sgmodule`

- #### 需要搭配下面两个 Module 使用

  - 重写一：cookie 获取成功后禁用

    `https://raw.githubusercontent.com/ChuheGit/1/main/Surge/Module/Cookie.sgmodule`

  - 重写二：用于辅助其他模块，无需禁用

    `https://raw.githubusercontent.com/ChuheGit/1/main/Surge/Module/Support.sgmodule`

### Quantumult X

- #### 添加 Gallery

  - 任务合集（包含下方整个资源列表）

    `https://dove.589669.xyz/task2qxgallery?img=1&sub=https://raw.githubusercontent.com/ChuheGit/1/main/Surge/Module/Task.sgmodule`

  - 京东合集（仅包含京东任务）

    `https://dove.589669.xyz/task2qxgallery?img=1&filter=jd_%7Cjx_%7CJD&sub=https://raw.githubusercontent.com/ChuheGit/1/main/Surge/Module/Task.sgmodule`

    > 此 API 可将 Surge 的远程模块转换为 Quantumult X 的 gallery 链接格式，img 参数可自动匹配 Task 图标，欢迎共同完善图标库（可连同脚本一起提交），要求图片为 108x108 尺寸的 PNG 格式，图片名称需同脚本名称一致，如 JD.js 对应 JD.png
    >
    > 提交请联系 TG: [@ChuheBot](https://t.me/ChuheBot)

  

- #### 需要搭配下面两个重写订阅使用

  - ⚠️请确保你添加了[资源解析器](https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js)并开启

    > 添加资源解析器：在Quantumult X 配置文件中[general] 部分，加入 `resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js`
    >
    >  ⚠️如提示"没有自定义解析器"，请长按首页右下角图标后点击左侧刷新按钮，更新资源，后台退出 APP，直到出现解析器说明

  - 重写一：cookie 获取成功后禁用

    `https://raw.githubusercontent.com/ChuheGit/1/main/Surge/Module/Cookie.sgmodule`

  - 重写二：用于辅助其他模块，无需禁用

    `https://raw.githubusercontent.com/ChuheGit/1/main/Surge/Module/Support.sgmodule`

## 资源列表

- #### 签到

  - [滴滴出行](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/didichuxing)
  - [电视家](https://raw.githubusercontent.com/Sunert/Scripts/master/Task/dianshijia.js)
  - [京东到家](https://raw.githubusercontent.com/Sunert/Scripts/master/Task/jddj.js)
  - [京喜](https://raw.githubusercontent.com/Sunert/Scripts/master/Task/jingxi.js)
  - [快手极速版](https://raw.githubusercontent.com/Sunert/Scripts/master/Task/kuaishou.js)
  - [人人视频](https://raw.githubusercontent.com/chavyleung/scripts/master/rrtv/rrtv.js)
  - [百度贴吧](https://raw.githubusercontent.com/chavyleung/scripts/master/tieba/tieba.js)
  - [腾讯视频](https://raw.githubusercontent.com/chavyleung/scripts/master/videoqq/videoqq.js)
  - [喜马拉雅](https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.js)
  - [字幕组](https://raw.githubusercontent.com/chavyleung/scripts/master/zimuzu/zimuzu.js)
  - [爱奇艺](https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js)
  - [京东](https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js)
  
- #### 京东活动

  - [东东农场](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_fruit.js)
  - [东东萌宠](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_pet.js)
  - [种豆得豆](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_plantBean.js)
  - [天天加速](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_speed.js)
  - [摇钱树](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_moneyTree.js)
  - [宠汪汪](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy.js)
  - [宠汪汪偷好友积分与狗粮](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy_steal.js)
  - [宠汪汪喂食](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy_feedPets.js)
  - [宠汪汪积分兑换奖品](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy_reward.js)
  - [宠汪汪邀请助力与赛跑助力](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_joy_run.js)
  - [取关店铺商品](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_unsubscribe.js)
  - [东东超市](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_superMarket.js)
  - [京小超兑换奖品](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_blueCoin.js)
  - [进店领豆](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_shop.js)
  - [摇京豆](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_club_lottery.js)
  - [京东全民开红包](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_redPacket.js)
  - ~~京东健康~~
  - [京豆变动通知](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_bean_change.js)
  - [京喜工厂](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_dreamFactory.js)
  - [东东小窝](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_small_home.js)
  - [东东工厂](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_jdfactory.js)
  - [点点券](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_necklace.js)
  - [十元街](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_syj.js)
  - ~~金榜年终奖~~
  - ~~秒杀红包雨~~
  - [领京豆额外奖励](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_bean_home.js)
  - [京东汽车](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_car.js)
  - [京东汽车兑换](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_car_exchange.js)
  - ~~健康抽奖机~~
  - [京东快递签到](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_kd.js)
  - ~~数码加购京豆~~
  - ~~直播红包雨~~
  - ~~苹果抽奖机~~
  - ~~PUBG~~
  - [京东直播](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_live.js)
  - ~~京东看一看~~
  - [京东金融-天天提鹅](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_daily_egg.js)
  - [京东金融-养猪猪](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_pigPet.js)
  - ~~金融打卡领年终奖~~
  - [注销京东会员卡](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_unbind.js)
  - [CrazyJoy任务](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_crazy_joy.js)
  - ~~CrazyJoy挂机~~
  - [口袋书店](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_bookshop.js)
  - [小米运动](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/backUp/xmSports.js)
  - [抽奖机](https://raw.githubusercontent.com/yangtingxiao/QuantumultX/master/scripts/jd/jd_lotteryMachine.js)
  - [排行榜](https://raw.githubusercontent.com/yangtingxiao/QuantumultX/master/scripts/jd/jd_rankingList.js)
  - [白条领券](https://raw.githubusercontent.com/yangtingxiao/QuantumultX/master/scripts/jd/jd_baiTiao.js)
  - [京东赚赚](https://raw.githubusercontent.com/whyour/hundun/master/quanx/jdzz.js)
  - [京喜工厂plus](https://raw.githubusercontent.com/whyour/hundun/master/quanx/jx_factory_component.js)
  - ~~京喜金牌厂长~~
  - [惊喜农场](https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_jxnc.js)
  - [京喜财富岛](https://raw.githubusercontent.com/MoPoQAQ/Script/main/Me/jx_cfd.js)

- #### 薅

  - [百度极速版](https://raw.githubusercontent.com/Sunert/Scripts/master/Task/baidu_speed.js)
  - [中青看点](https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js)
  - [中青看点自动阅读](https://cdn.jsdelivr.net/gh/songyangzz/QuantumultX@master/YOUTH_READ.js)
  - [中青看点浏览赚](https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth_gain.js)
  - ~~企鹅读书~~
  - ~~惠头条~~
  - [葱花视频](https://raw.githubusercontent.com/CenBoMin/GithubSync/main/CONGHUA/chonghua.js)
  - [葱花视频自动阅读](https://raw.githubusercontent.com/CenBoMin/GithubSync/main/CONGHUA/AutoRead.js)
  - ~~返利网红包~~
  - [抖音极速版](https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/dyjsb.js)
  - [笑谱](https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/xp.js)

## 补充说明

- 脚本部分功能需要搭配作者的 BoxJs 订阅使用

  > 教程：https://chavyleung.gitbook.io/boxjs/

  `https://raw.githubusercontent.com/Sunert/Scripts/master/Task/sunert.boxjs.json`

  `https://raw.githubusercontent.com/chavyleung/scripts/master/box/chavy.boxjs.json`

  `https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json`

  `https://raw.githubusercontent.com/lxk0301/jd_scripts/master/lxk0301.boxjs.json`

  `https://raw.githubusercontent.com/whyour/hundun/master/quanx/whyour.boxjs.json`

  `https://raw.githubusercontent.com/songyangzz/QuantumultX/master/syzzzf.box.json` 
  
  `https://raw.githubusercontent.com/CenBoMin/GithubSync/main/cenbomin.box.json`

## 鸣谢

- #### 🌹致敬无私分享辛劳成果的大佬们🌹 （排名不分先后）

  > **特别感谢 [Shawn](https://github.com/KOP-XIAO/QuantumultX-Surge-API) 的 API 支持**

  > 如有遗漏或差错，绝非本意，敬请谅解，烦请[联系](https://t.me/Chuhe)修改

  

- #### 脚本

  - [NobyDa](https://github.com/NobyDa/Script/tree/master)
  - [chavyleung](https://github.com/chavyleung/scripts/tree/master)
  - [Sunert](https://github.com/Sunert/Scripts/tree/master)
  - [lxk0301](https://github.com/lxk0301/jd_scripts/tree/master)
  - [whyour](https://github.com/whyour/hundun/tree/master)
  - [ziye12](https://github.com/ziye12/JavaScript/tree/master)
  - [yangtingxiao](https://github.com/yangtingxiao/QuantumultX/tree/master)
  - [songyangzz](https://github.com/songyangzz/QuantumultX/tree/master)
  - [MoPoQAQ](https://github.com/MoPoQAQ/Script/tree/main)
  - [elecV2](https://github.com/elecV2/QuantumultX-Tools)
  - [CenBoMin](https://github.com/CenBoMin/QuantumultX/tree/master)

- #### 图标

  - [58xinian](https://github.com/58xinian/icon/tree/master)
  - [Koolson](https://github.com/Koolson/Qure/tree/master)
  - [Orz-3](https://github.com/Orz-3)
  - [yangtingxiao](https://github.com/yangtingxiao/QuantumultX/tree/master/image)
  - [shoujiqiyuan](https://github.com/shoujiqiyuan/PVSZforQuanX/tree/master)

- #### API

  - [KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX-Surge-API)

- #### 规则

  - [DivineEngine](https://github.com/DivineEngine/Profiles/tree/master)  

## 声明

- 所有引用的资源均来源于 GitHub，仅为资源共享、学习参考之用，不保证其合法性、正当性、准确性，本人不对任何内容和使用后果承担任何责任，如有侵权，烦请[联系](https://t.me/Chuhe)删除。