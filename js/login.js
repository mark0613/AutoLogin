const Account = ["username", "user", "account", "name", "email", "nid", "login"];
const Password = ["password", "pswd", "passwd", "pass", "pwd"];

function checkUrl(url){
    for (key in Data){
        if (url.indexOf(key) != -1) return key;
    }
    return false;
}
function isAccount(string){
    for (let idx in Account){
        if (string.indexOf(Account[idx]) != -1) return true;
    }
    return false;
}
function isPassword(string){
    for (let idx in Password){
        if (string.indexOf(Password[idx]) != -1) return true;
    }
    return false;
}
function login(key){
    var input = document.getElementsByTagName("input");
    var account, password, tmp;
    
    for (let idx in input){
        if (input[idx].name && (input[idx].type=="text" || input[idx].type=="password")){
            tmp = input[idx].name.toLowerCase();
            if (isAccount(tmp) && account===undefined) account = input[idx];
            if (isPassword(tmp) && password===undefined) password = input[idx];
        }
    }
    try{
        account.value = Data[key][0];
        password.value = Data[key][1];
    }
    catch(e){
        alert("找不到輸入框");
    }
}

const onMessage = (message) => {
    if (message.action == "login") {
        var key = checkUrl(message.url);
        if (key){
            login(key);
        }
        else{
            alert("尚無該網址的登入資訊");
        }
    }
}

chrome.runtime.onMessage.addListener(onMessage);
