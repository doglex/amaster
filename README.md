# amaster
安卓 电脑助手 ： 同步文件

Guide Video: https://www.bilibili.com/video/BV18y4y1J7Xi/

![image](./res/1.jpg)
![image](./res/2.png)
![image](./res/3.png)
![image](./res/4.png)
![image](./res/6.jpg)


# Rely 
+ Android Debug Bridge version 1.0.41 + 
+ perl (optional)
+ powershell

# develop 
```
npm install
echo electron.exe > node_modules\electron\path.txt
node node_modules\electron\install.js
npm start
```


# todo
- [ ]  编辑
- [x] 类型统计
- [x] 图片扫描并下载
- [ ] 图片预览
- [x] 多标签页资源管理器
- [ ] 文件夹大小
- [x] 右键文件夹
- [x] 应用管理
  

# 小米便签
找到设置--备份--备份便签，会产生在 MIUI/backups 下，用"终端" 重命名文件后可以下载 ，然后用7-zip解压，
得到 apps\com.miui.notes\miui_bak， 手动编辑这个文件

