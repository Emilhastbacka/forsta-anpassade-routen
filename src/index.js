const express = require('express');
const app = express();


app.use(express.static("public"));

app.get('/hello', (req, res) => {
    res.send('Hej på dig!');

});
app.listen(3000, () => {
    console.log("yes");
})