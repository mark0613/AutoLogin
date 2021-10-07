# AutoLogin

A chrome extension that automatically enters the account and password into the website.

用於自動填入網頁的帳號密碼的 chrome extension

## 操作
- 在 js/data.js 裡修改 Data 內容
  + key 為指定網址的關鍵詞
  + value 為一陣列，先放帳號再放密碼
- 安裝進擴充功能
- 點擊插件後再點擊 Login 按鈕，即可自動填入帳號密碼

## 注意
- 此方法並不保證帳號密碼的安全性，請自行斟酌
- 修改 Data 的 key 時，為求安全，請盡可能與網址匹配，以避免在相似網址的釣魚網站洩漏出帳號資訊
