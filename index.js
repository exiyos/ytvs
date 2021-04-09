process.on('uncaughtException', function(err) {
    console.log(err);
});


const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
var title;
app.use('/views', express.static('views'));
app.use(cors());
app.listen(4000, () => {
    console.log('Server Workss !!! At port 4000');
});

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.get('/download', (req,res) => {
var URL = req.query.URL;



ytdl.getInfo(URL).then(info => {
    console.log(info.videoDetails.title);
    title = info.videoDetails.title;
    res.header('Content-Disposition', `attachment; filename=${info.videoDetails.title}.mp4`);
ytdl(URL, {
    format: 'mp4'
    }).pipe(res);

})



    



 










});