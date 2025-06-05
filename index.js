const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Serve all static files from current directory
app.use(express.static(__dirname));

// Send the main page on /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'player_ready', 'player_r.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
