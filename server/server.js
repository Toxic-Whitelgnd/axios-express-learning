const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios');

// add this if u got axios network error in client side
var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));

const newsapicall = async ()=>{
    // after luch the country and category will be dynamic we nned to make post request
    try{
        const newsapi = await axios.get("https://newsapi.org/v2/top-headlines?country=ae&category=entertainment&language=en&apiKey=cd38a15961de4412a0d24a24c41c4588")
        return newsapi.data;
    }
    catch(err){
        console.error(err);
    }
}

const newsapicallwith = async (country,category)=>{
    // after luch the country and category will be dynamic we nned to make post request
    try{
        const newsapi = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=cd38a15961de4412a0d24a24c41c4588`)
        return newsapi.data;
    }
    catch(err){
        console.error(err);
    }
}


app.get('/newsapi', async (req,res)=>{

    const result = await newsapicall();
    res.json(result);

})

app.post('/newsapi',async (req,res)=>{
    const country = req.body.country;
    const category = req.body.category;
    console.log(country,category);
    const result = await newsapicallwith(country,category)
    res.json(result);
})


app.listen(5000,()=>{
    console.log('listening on http://localhost:5000');
})