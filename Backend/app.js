const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())


const connect = () => {
    return mongoose.connect("mongodb+srv://manisgdb:manish@cluster0.ufnzw.mongodb.net/shoppers?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
    });
} 
const productSchema = mongoose.Schema({
    size: [String],
    category: String,
    name: String,
    img: String, 
    company: String,
    description: String,
    color: String,
    mrp: Number,
    discount: Number,
}, {
    versionKey: false
})
const usersSchema = mongoose.Schema({

    first_name: String,
    last_name: String,
    number: String,
    password: Number,
    wallet: Number,
    email: String,
    email_verified: Boolean,
    image_url: String,
    gender: String,
    address: [String],
    favorite: [{
        size: String,
        id: String,
        quantity: Number,
        category: String,
        name: String,
        img: String,
        company: String,
        description: String,
        color: String,
        mrp: Number,
        discount: Number,
    }],
    orders: [{
        size: String,
        // _id: String,
        quantity: Number,
        category: String,
        name: String,
        img: String,
        company: String,
        description: String,
        color: String,
        mrp: Number,
        discount: Number,
    }],
    cart: [{
        size: String,
        quantity: Number,
        category: String,
        name: String,
        img: String,
        company: String,
        description: String,
        color: String,
        mrp: Number,
        discount: Number,
    }],
}, {

    versionKey: false
})
const Product = mongoose.model("product", productSchema);
const User = mongoose.model("user", usersSchema);


app.get("/product", async (req, res) => {
    let c = req.query.c;
    let name = req.query.name;
    let discount = +req.query.discount;
    let mrp = +req.query.mrp;
    let color = req.query.color;
    let sort = req.query._sort;
    let order = req.query._order;
    let obj = {}
    let sortObj = {}
    c ? obj.category = c : null;
    name ? obj.name = name : null;
    discount ? obj.discount = { $lt: discount } : null;
    mrp ? obj.mrp = { $lt: mrp } : null;
    color ? obj.color = color : null;
    sort ? sortObj[sort] = order == "asc" ? 1 : -1 : {}
    const data = await Product.find(obj).sort(sortObj).lean().exec()
    console.log(data)
    res.status(200).json({ data: data })
})
app.get("/product/:id",async(req,res)=>{
    let id=req.params.id;
    const data=await Product.findById(id)
    res.json({data})
})
app.post("/product", async (req, res) => {
    const user = await Product.create(...req.body)
    res.json({ data: user })
})


app.get("/user/:phoneNumber", async (req, res) => {
    let mobile = req.params.phoneNumber
    const user = await User.find({ number: mobile })
    res.json({ data: user })
})
app.post("/user", async (req, res) => {
    const user = await User.create(req.body)
    res.status(201).json({ data: user })
})
app.patch("/user/:id", async (req, res) => {
    let id = req.params.id;
    let user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json({ data: user })
})
// app.patch("/user/phone/:phone", async (req, res) => {
//     let phone = req.params.phone;
//     let productId = req.query.productId;
//     let temp = req.body;
//     let user = await User.find({ phone: phone }, { cart: { $set: temp } })
//     // let user = await User.findByIdAndUpdate(id, req.body, { new: true });
//     res.status(201).json({ data: user })
// })

const start = async () => {
    await connect();
    app.listen(1200, () => {
        console.log("listening to 1200")
    })
}
start();