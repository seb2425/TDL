const express=require('express');
const bodyParser= require('body-parser');


const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
let tdl=[];
let mlist=[];
var options={
    weekday:'long',
    year:'numeric',
    day:'numeric',
    month:'long'
}


app.get("/",function(req,res){
    var today= new Date();
    
var datetoday=today.toLocaleDateString("en-US",options);
res.render("list",{listname:'coding',DATE:datetoday,tar:tdl});
});


app.get("/movies",function(req,res){
    var today=new Date();
    var datetoday=today.toLocaleDateString("en-US",options);
    res.render("list",{listname:'movies',DATE:datetoday,tar:mlist});
})

app.get("/about",function(req,res){
    res.render("about");
})

app.post("/",function(req,res){
    //console.log(req.body.tdl1);
    //console.log(req.body.lasstname);
    //console.log(req.body);
    if(req.body.lpstname=="coding"){
        tdl.push(req.body.tdl1);
        res.redirect("/");
    }else if(req.body.lpstname=="movies"){
        //console.log(req.body);
        mlist.push(req.body.tdl1);
        res.redirect("/movies");    
    }
});



app.listen(3000,()=>{
    console.log("Server running at port 3000");
})