const express = require('express')
const app = express()
const helmet = require('helmet')
app.use(helmet())
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({
        API:'API teste node js',
        Autor:'Dev Anisio Aleixo',
        OBS:'Api para teste em VM da AZURE',
        date:'04/08/2021'
    })
})

app.listen(3000,()=>console.log(`Server run!`))