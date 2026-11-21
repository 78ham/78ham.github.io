# 78HAM 团队网站

GitHub Pages 上的介绍页。内容来自组织名下的仓库：Android、桌面、公网手台、ESP32 固件、Minecraft 模组、转发服务器、管理后台、协议文档和通联日志。

`index.html` 是整页内容。`assets/site.css` 是样式，颜色在文件开头的变量里。`assets/site.js` 只做两件事：窄屏时展开菜单，以及让首页那颗 PTT 在按住时把面板从 RX 改成 TX。那颗键不连接服务器。

改某一台设备的介绍，改 `index.html` 里对应的那一条，仓库链接就在同一条上。标志图在 `assets/logo.webp`，由安卓仓库里的 `78hamlogo.jpg` 缩小并切成圆角得来。

本地看：

```bash
python -m http.server 8765
```

打开 http://127.0.0.1:8765 。根目录的 `.nojekyll` 让 GitHub Pages 按原文件发布，不经过 Jekyll。
