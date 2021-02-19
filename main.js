const { app, BrowserWindow, Notification, BrowserView , dialog, remote, ipcMain, webview} = require('electron')
app.setAppUserModelId('aMaster')

function createWindow () {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        frame: false,
        icon:"lib/fav.ico",
        backgroundColor: "black",
        webPreferences: {
            nodeIntegration: true,
            webviewTag:true,
            enableRemoteModule:true,
            contextIsolation: false,
            webSecurity: true
        }
    })
    win.loadFile('main.html')
    // win.loadFile('index.html')
    // win.openDevTools();

}

ipcMain.on('e111', (event, arg) => {
    console.log(arg) // prints "ping"
    event.returnValue = 'pong'
})


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

