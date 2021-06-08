const express = require("express");
const mongoose = require("mongoose")
const app = express();
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
    phone: Number,
    password: Number,
    wallet: Number,
    email: String,
    email_verified: Boolean,
    image_url: String,
    gender: String,
    address: [String],
    favorite: [String],
    orders: [],
    cart: [],
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
app.post("/product", async (req, res) => {
    const user = await Product.create(...req.body)
    res.json({ data: user })
})


app.get("/user", async (req, res) => {
    let age = +req.query.age
    let sort = req.query._sort;
    let order = req.query._order
    age = age ? { age } : {}
    let obj = {}
    sort ? obj[sort] = order == "asc" ? 1 : -1 : {}
    const user = await User.find(age).sort(obj)
    res.json({ data: user })
})
app.get("/user", async (req, res) => {
    const user = await User.find()
    res.json({ data: user })
})
app.post("/user", async (req, res) => {
    const user = await User.create(...req.body)
    res.json({ data: user })
})
app.delete("/user/:id", async (req, res) => {
    let id = req.params.id;
    let user = await User.findByIdAndDelete(id)
    res.status(203).json({ data: user })
})
app.patch("/user/:id", async (req, res) => {
    let id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true })
    res.status(203).json({ data: user })
})




const start = async () => {
    await connect();
    app.listen(1200, () => {
        console.log("listening to 1200")
    })
}
start();