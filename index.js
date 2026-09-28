const server=require("express");
const app=server();

app.use(server.json());
// app.get('/', (req, res) =>{
//     let obj ={
//         name: "Khushi",
//         Age:25,
//         batch:227
//     }
//     // res.send(JSON.stringify(obj))
//     res.status(200).json({
//         _status:true,
//         _data : obj
//     })
// })


app.post('/create' , (req, res) =>{
    let {username, userpassword} = req.body;

    res.status(201).json({
        _status:true,
        username,
        userpassword
    })
    }) 


let PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})