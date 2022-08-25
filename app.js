import express from 'express';
import example from './src/routes/example';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/example', example);

app.listen(port, () => {
    console.log(`SportaGo app listening on port ${port}`);
})