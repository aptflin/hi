const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// 把整個根目錄設為可讀取靜態檔案
app.use(express.static(__dirname));

// 將首頁導向 player_ready/player_r.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'player_ready', 'player_r.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
