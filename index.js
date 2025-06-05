const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

// ✅ 這行會公開整個專案目錄的所有檔案
app.use(express.static(__dirname));

// ✅ 如果有子資料夾，也能被直接存取（例如 /images/BG.png）
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'player_ready', 'player_r.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
