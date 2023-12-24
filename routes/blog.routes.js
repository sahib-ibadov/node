const express = require("express")
const { v4: uuidv4 } = require('uuid');
const moment = require("moment")

const Blog=require("../model/blog.model")
const router=express.Router()


const blog = [
    {
        id: 1,
        title: "lorem1",
        description: "",
        createdAt: moment().format("LLL"),
        modifiedAt: moment().format("LLL"),
        author: { name: "Ali", surname: "Agamaliyev" }
    },
    {
        id: 2,
        title: "lorem2",
        description: "",
        createdAt: moment().format("LLL"),
        modifiedAt: moment().format("LLL"),
        author: { name: "Yusif", surname: "Eliyev" }
    }, {
        id: uuidv4(),
        title: "lorem3",
        description: "",
        createdAt: moment().format("LLL"),
        modifiedAt: moment().format("LLL"),
        author: { name: "Sahib", surname: "Ibadov" }
    },

]

router.get("/", (req, res) => {
    res.send(blog)
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    const target = blog.find((item) => item.id == id)
    if (target) {
        res.send(target)
    }
    else {
        res.send("item not founf")
    }
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    const target = blog.find((item) => item.id == id)
    if (target) {
        const indexOfTarget = blog.indexOf(target)
        blog.splice(indexOfTarget, 1)
        res.send(`silinen id li elemet  : ${target.id}`)
    } else {
        res.send("item is not found")
    }


})

router.post("/", (req, res) => {
    res.send(req.body)
    const { name, surname } = req.body.author
    const newBlog = new Blog(uuidv4(), req.body.title, req.body.description, moment().format("LLL"), moment().format("LLL"), name, surname)
    blog.push(newBlog)
    res.send("item created")
})

router.put("/:id", (req, res) => {
    const { id } = req.params
    let target = blog.find((item) => item.id == id)
    if (target) {
        const indexOfTarget = blog.indexOf(target)
        target = { ...target, ...req.body, modifiedAt: moment().format("LLL") }
        blog[indexOfTarget] = { ...target }
        res.send(blog)
    }
    else {
        res.send("item is not found")
    }
})
module.exports=router
