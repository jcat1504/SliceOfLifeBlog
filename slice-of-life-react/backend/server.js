const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/blog-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const BlogPostSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: Date,
})