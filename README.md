# ELECTRON-TEMPLATE

### 基于 umijs + dva + electron + typescript +antd 的模板项目

[umi](https://umijs.org/zh/)  、 [dva](https://dvajs.com/) 、  [electron](https://electronjs.org) 、 [typescript](https://www.typescriptlang.org) 、 [antd](https://ant.design/index-cn)  

## 功能
- 支持main和render的热加载
- 支持typescript
- 使用antd组件
- 使用umijs
- 使用dva数据流方案

## 安装

第一步，clone本参考

```javascript
  git clone git@github.com:xiexingen/ElECTRON-TEMPLATE.git
```

然后安装依赖

```javascript
  $ yarn
```

## 启动开发环境

第一步，启动渲染进程(默认端口为9000)

```javascript
  $ yarn start:renderer
```

然后启动主进程

```javascript
  $ yarn start:main
```

## 打包

```javascript
  $ npm run pack
```

如果你想打包到dmg(在mac上)或者 zip，你可以运行如下命令

```javascript
  $ npm run dist
```
如果你想打包到所有平台(例如:mac、windows、linux)，你可以运行如下命令

```javascript
  $ npm run dist-all
```

## 截图

### Windows

## 功能

- [x] umi启动页面

## 更多功能

- [ ] todo

## 安装

[**这里**](https://github.com/xiexingen/Electron-Template/releases/latest) 去下载最新版本，或者下面的指定系统版本。

### Mac(10.9+)

[下载](https://github.com/xiexingen/Electron-TEMPLATE/releases/download/v1.0.2/ELECTRON-TEMPLATE-1.0.2-mac.dmg) `.dmg` 或者使用 `homebrew`:

```
brew cask install ELECTRON-TEMPLATE
```

### Linux

'Debian / Ubuntu' 使用 `.deb` [下载](https://github.com/xiexingen/Electron-TEMPLATE/releases/download/v1.0.2/ELECTRON-TEMPLATE-1.0.2-linux-amd64.deb):

```
$ sudo dpkg -i ELECTRON-TEMPLATE-1.0.2-linux-amd64.deb
```

### Win

[下载](https://github.com/xiexingen/Electron-TEMPLATE/releases/download/v1.0.2/ELECTRON-TEMPLATE-Setup-1.0.2.exe)



## 欢迎参与贡献

发现了错误? 向我发起一个 [PR](https://github.com/xiexingen/ELECTRON-TEMPLATE/pulls) 吧!
参考 [Commit message 和 Change log 编写指南 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html) 提交 commit 即可。

## 致谢
- [@wangtianlun](https://github.com/wangtianlun)提供的模板([umi-electron-typescript](https://github.com/wangtianlun/umi-electron-typescript))，我是在这个模板上进行修改的。
- [Electron](https://github.com/electron/electron), [Umi](https://github.com/umijs/umi), [Dva](https://github.com/dvajs/dva), [Antd](https://github.com/ant-design/ant-design)等框架的开发者们。

## 协议

MIT © [xiexingen](https://github.com/xiexingen)

