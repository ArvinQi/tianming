import express from 'express';

const app = express();

app.get('/', function(req, res) {
    res.send('Hello tianming');
});
app.listen(9000, function() {
    console.log('Tianming is running on port 9000')
});
