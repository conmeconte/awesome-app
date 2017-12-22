const express = require('express');
const cors = require('cors');
const path = require('path'); 
const PORT = process.env.PORT || 9000; 

const app = express(); 


app.use(cors()); //setting two headers to allow cross origin. only for testing stuff not your live site. 

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));


app.get("/api/get-stuff", (req, res) => {
    const stuff = {
        name: "Stuffins",
        message: "Here is some stuff"
    };
    res.send(stuff);

});

app.get('/api/better-stuff', (req, res)=>{
    const betterStuff= {
        better: 'This is the real stuff',
        message: 'The mostest gooder stuff'
    }

    res.send(betterStuff);
})

app.get('*', (req, res)=> {
    res.send(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});


app.listen(PORT, ()=>{
    console.log('Server Running at localhost: ' + PORT);
});

