const { app, BrowserWindow , nativeImage } = require('electron')
const path = require('path')

function createWindow () {
  // 创建一个窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // 加载指定的远程地址
  mainWindow.loadURL('http://47.106.111.143:8080/')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  // 创建托盘图片
  const icon = nativeImage.createFromPath('assets/icons/tray.ico')
  tray = new Tray(icon)

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
