## 企业微信通知推送

</br>

更新时间：2022-9-2

有2种方式，我来分别讲下

> 亦可全程在 `企业微信`app 注册

* 应用通知

* 学校通知

</br>
</br>



## 应用通知

</br>

> 通过自建插件，利用推送工具，可无需下载企业微信，微信即可接收通知


以青龙-京东通知为例

企业微信官网：https://work.weixin.qq.com/

点击 `⽴即注册` 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-01.png)

企业名称随意，管理员姓名真实，扫码绑定

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-02.png)

这样就注册成功了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-03.png)


先获取企业ID， 我的企业 - 企业ID

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-04.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-05.png)

</br>

### 1.常规设置

</br>

在 `聊天管理` 成员创建群聊上限改成最低，关闭 消息阅读状态、部门群 、全员群 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-06.png)


在 `通讯录管理` 中关闭通讯录访问权限，对所有⼈隐藏，主要是保护个人隐私


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-07.png)


在 `工作台管理` 中关闭成员可见的 第三方入口 和 上门服务入口


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-08.png)


在 `微信插件` 中保存邀请关注⼆维码，关闭微信插件底部快捷打开

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-09.png)


在 `申请加⼊设置` 中关闭通过企业查找加入

> 如果不想别人乱加，可以开启 加入企业管理员审核

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-10.png)


在 `设置` 中关闭使⽤提醒

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-11.png)


</br>


### 2.创建应用

</br>

应⽤管理 中创建应⽤

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-12.png)


上传LOGO、填写应⽤名称，选择部门，创建

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-13.png)

记下 AgentId ，点击 查看 获取 Secret

> 手机登录企业微信app查看

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-14.png)


到 发送消息 中 `发消息`,素材库-图片-上传图⽚

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-15.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-16.png)



上传完成后，点击图标，右键-复制图片地址


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-17.png)


media_id 就是图⽚ID，这个类似微信公众号的封⾯图


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-18.png)


查看 通讯录 中的帐号 ，微信插件是否 `已关注` 状态

> 未关注需要扫描 我的企业 - 微信插件 -邀请关注 中的⼆维码

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-19.png)



</br>

### 3.开启推送

</br>

我们来看看青龙的配置要求

```
## 企业微信应用
## 参考文档：http://note.youdao.com/s/HMiudGkb
## 下方填写素材库图片id（corpid,corpsecret,touser,agentid），素材库图片填0为图文消息, 填1为纯文本消息
export QYWX_AM=""
```


我们按照对应的变量填写即可

```
export QYWX_AM="QYWX_AM＝企业ID,应⽤Secret,账号(@all),应⽤ID,图⽚ID(选填)"
```






</br>
</br>

## 学校通知

</br>

> 利用企业微信教育版的学校通知推送，很有想法！

企业微信官网：https://work.weixin.qq.com/

点击 `⽴即注册` 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-01.png)

企业名称随便，行业类型必须`教育-学前教育`，员工规模101-200人

> 超200人就要认证费了，200以下免费

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-01.png)

其他信息真实的，绑定微信注册成功

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-02.png)

进入管理后台，关闭这里的自动提醒成员使用，而且这里提示有1人未加入，我们下载企业微信app并登陆

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-03.png)


</br>

### 1.常规设置

</br>

在 `聊天管理` 成员创建群聊上限改成最低，关闭 消息阅读状态、部门群 、全员群 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-06.png)


在 `通讯录管理` 中关闭通讯录访问权限，对所有⼈隐藏，主要是保护个人隐私


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-07.png)


在 `工作台管理` 中关闭成员可见的 第三方入口 和 上门服务入口


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-08.png)


在 `微信插件` 中保存邀请关注⼆维码，关闭微信插件底部快捷打开

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-09.png)


在 `申请加⼊设置` 中关闭通过企业查找加入

> 如果不想别人乱加，可以开启 加入企业管理员审核

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-10.png)


在 `设置` 中关闭使⽤提醒

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-11.png)


</br>


### 2.新建应用

</br>

想微信通知，就要自己建一个应用

应⽤管理 中创建应⽤

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-12.png)


上传LOGO、填写应⽤名称，选择部门，创建

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/wecom-13.png)


应用下填写 `应用主页`，必填！不然后面用不了，网址就随意

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-04.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-05.png)


家校通知 - 配置 -家长可使用的应用

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-06.png)


添加应用 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-07.png)


选择 刚出创建的应用

> 如果这里没有创建的应用，是因为应用没有设置`应用主页`

> 小字也提示了：仅支持设置了工作台主页的应用和学校已关联的小程序

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-08.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-09.png)



### 3.家校沟通

</br>

家校沟通-家校通讯录

> 没有家校沟通，说明你注册就没有选教育

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-10.png)

删掉学段，我们自己自定义添加

> 同样我们也可以自定义班级

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-11.png)


点 邀请加入 ，保存二维码发给别人，就可以摇人了

> 或者草料识别二维码后，提取连接

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-12.png)


姓名随便，手机要微信绑定的，提交

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-13.png)

微信就多了一个 学校通知 

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/wecom/edu-14.png)


</br>

### 4.开启推送

</br>

我们来看看青龙的配置要求

```
## 企业微信应用
## 参考文档：http://note.youdao.com/s/HMiudGkb
## 下方填写素材库图片id（corpid,corpsecret,touser,agentid），素材库图片填0为图文消息, 填1为纯文本消息
export QYWX_AM=""
```


我们按照对应的变量填写即可

```
export QYWX_AM="QYWX_AM＝企业ID,应⽤Secret,账号(@all),应⽤ID,图⽚ID(选填)"
```