import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());


app.listen(PORT,()=>{
    console.log(`Server is Running On ${PORT}`);
})

