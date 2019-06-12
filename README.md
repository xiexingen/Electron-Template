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

