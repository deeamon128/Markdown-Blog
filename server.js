const express = require("express");
const mongoose = require("mongoose");
const app = express();
const articleRouter = require("./routes/articles");

mongoose.connect("mongodb://localhost/blog");

app.set("view engine", "ejs");

app.use("/articles", articleRouter);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "test article",
      date: new Date(),
      description: "test description",
    },
    {
      title: "test article2",
      date: new Date(),
      description: "test description",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(3000);
