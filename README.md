# Restaurant List

這是 AC 2-3 學期 A3 / A6 用 Node.js、Express、MongoDB 所建置的餐廳列表網站

## Features

- 使用者可以在首頁看到所有餐廳與它們的簡單資料
- 可以點進去查看餐廳詳細資訊
- 可以透過 search 輸入餐廳名字找特定餐廳
- 使用指定的 index page & show page 樣式
- 使用 restaurant.json 製作頁面資料
- 可以新增、修改、刪除餐廳的資訊

### Searching

- 輸入餐廳名字及分類可以搜尋特定餐廳
- 在搜尋後關鍵字依然會顯示欄位上

## 環境建置與需求 (prerequisites)

- Visual Studio Code - 開發環境
- Express - 應用程式架構(version: 4.17.1)
- express - 4.17.1
- express - handlebars 5.3.2
- npm - a JavaScript package manager
- nodemon - 可讓網頁即時呈現套件
- nvm version 1.1.7
- Bootstrap v4.2.1
- jQuery v3.3.1
- popperjs v2.9.1
- MongoDB

## 安裝與執行步驟

1. 打開終端機，clone 此專案至本機電腦
   `https://github.com/shijia22/AC_2-3_restaurant_list.git`
2. 開啟終端機，進入存放此專案資料夾
   `cd AC_2-3_restaurant_list`
3. 安裝 npm 套件
   `npm install`
4. 新增種子資料
   `npm run seed`
5. 啟動專案
   `npm run dev`
6. 啟動 nodemon
   `nodemon app.js`
7. 出現以下訊息後，即可在 http://localhost:3000 開始使用
   `Express is listening on localhost:3000`

## 版本階段
- 學期 2-3 A4 進度
   `git checkout S1_A4`
- 學期 2-3 A6 進度
   `git checkout S3_A6`
- 只想看最終成果
   `git checkout main`