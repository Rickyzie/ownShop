import express from "express";
import session from "express-session";
import mysql from "mysql";

var app=express();
app.use(express.json())

function auth(req, res, next) {
  if (req.session.name) {
    next()
  } else {
  return res.send({name:'unconnect'})
  }
};

app.use(session({
  secret: 'mySecret',
  name: 'name', // optional
  saveUninitialized: false,
  resave: true, 
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
}));

app.get("/api/class/", (req,res)=>{
  console.log(req.query)
  let con= mysql.createConnection({
    user:'root',
    password:'aa24572880',
    server:'127.0.0.1:3306',   //這邊要注意一下!!
    database:'ownShop'
  });
  
  con.connect((err) => {
    if(err) console.log(err);
    con.query("SELECT DISTINCT ProductClass FROM product", (err, result, fields) =>{
      if (err) throw err;
      return res.send(result);
    })
  });
  
})

app.get("/api/product/",function(req,res){
  let con= mysql.createConnection({
    user:'root',
    password:'aa24572880',
    server:'127.0.0.1:3306',   //這邊要注意一下!!
    database:'ownShop'
  });
  con.connect((err) => {
    if(err) console.log(err);
    con.query("SELECT * FROM product WHERE ProductClass=?",[req.query.query], (err, result, fields) =>{ 
      if (err) throw err;
      return res.send(result);
    });
  });
});

app.get("/api/update/",(req, res)=>{
  let con= mysql.createConnection({ 
    user:'root',
    password:'aa24572880',
    server:'127.0.0.1:3306',   //這邊要注意一下!!
    database:'ownShop'
  });
  let queryString = "INSERT INTO product (ProductClass, ProductName, Price, ProductDetail, Image) VALUES (?)";
  let val = ["asdsda", "asdsda", 1000, "sadsda", "asddsasd"]
  con.query(queryString, [val],(err, result, fields)=>{
    if (err) throw err;
    return res.send("a");
  });
});

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
});

/*
con.connect((err) => {
  if(err) console.log(err);
  data.products.map((val)=>{
      console.log(Object.values(val));
      let queryString ="INSERT INTO product VALUES (?)";
      con.query(queryString, [Object.values(val)],(err, result, fields) => {
        if (err) throw err;
        return res.send("a");
        });
  });
});
*/

  