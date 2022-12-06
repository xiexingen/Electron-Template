const { app, BrowserWindow , nativeImage, Tray, Menu } = require('electron')
const path = require('path')

function createWindow () {
  // 创建一个窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    skipTaskbar:true,
    icon: path.join(__dirname, 'build/icons/icon.ico')
  })
  // 隐藏默认菜单
  // mainWindow.setMenu(null);
  mainWindow.removeMenu()

  // 触发关闭时触发
  mainWindow.on('close', (event) => {
    // 截获 close 默认行为
    event.preventDefault();
    // 点击关闭时触发close事件，我们按照之前的思路在关闭时，隐藏窗口，隐藏任务栏窗口
    mainWindow.hide();
    mainWindow.setSkipTaskbar(true);
  });

   // 新建托盘
   const tray = new Tray(path.join(__dirname, 'build/icons/icon.ico'));
   // 托盘名称
   tray.setToolTip('Easy Spec');
   // 托盘菜单
   const contextMenu = Menu.buildFromTemplate([
    {
      label: '显示',
      click: () => { mainWindow.show() }
    },
    {
      label: '退出',
      click: () => { mainWindow.destroy() }
    }
   ]);
   // 载入托盘菜单
   tray.setContextMenu(contextMenu);
   // 双击触发
   tray.on('double-click', () => {
      // 双击通知区图标实现应用的显示或隐藏
      mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
      mainWindow.isVisible() ? mainWindow.setSkipTaskbar(false) : mainWindow.setSkipTaskbar(true);
   });

  // 加载指定的远程地址
  mainWindow.loadURL('http://47.106.111.143:8080/')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
