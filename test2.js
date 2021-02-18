var spawn = require('child_process').spawn
// cmd = "adb -s emulator-5554  pull /sys amaster-download/emulator-5554/"
// cmd = " adb shell \"ls -Ral 2>/dev/null | grep '\\..\\{1,3\\}$' | grep -v '\\.\\.' | grep -v total\""
// cmd = " adb -s 1c0bde48  shell \" find /storage/self/primary/  -type f -exec ls -lh {} \\; | grep '\\..\\{1,5\\}$' \" "
// cmd = " adb -s 1c0bde48  shell \" ls -alR /storage/self/primary/   \" "
let cmd = ` adb shell \" du -a /data/ /storage/self/primary/ 2>/dev/null  \" `

// 可能得powershell
// var handle = spawn( 'cmd', [ '/c', cmd ] )

let cspr = process.platform === "win32" ? spawn('powershell', ['/c', cmd]) : spawn(cmd);

const readline = require('readline');


const rl = readline.createInterface({ input: cspr.stdout });
rl.on('line', line => {
        lineParts = line.split("\t")
        size = parseInt(lineParts[0])
        console.log(size)
    }
)