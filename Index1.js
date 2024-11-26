//SALAU OLABODE HAKEEEM
//23/0911
//IT GROUP (C)
const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('<h2>Welcome!</h2><p>this is my express page </p>');
});
app.get('/login',(req, res)=>{
    res.send("This is the login page welcome")
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
