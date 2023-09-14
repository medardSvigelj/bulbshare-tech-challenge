require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const feed = require("./data/feed.json");
const comments = require("./data/comments.json");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "assets")));

const getPage = (page, pageCount) => {
  if (page < 0) {
    page = 1;
  } else if (page > pageCount) {
    page = pageCount;
  } else {
    return page;
  }
};

const sliceFeed = (feed, pageSize, page) => {
  return feed.slice(page * pageSize - pageSize, page * pageSize);
};

app.get("/feed", (req, res) => {
  const pageSize = req?.query?.PAGE_SIZE ? parseInt(req.query.PAGE_SIZE) : 5;
  const pageCount = Math.ceil(feed.length / pageSize);
  const pageQueryParam = req?.query?.PAGE ? parseInt(req.query.PAGE) : 1;
  const page = getPage(pageQueryParam, pageCount);
  res.json({
    page,
    pageCount: pageCount,
    feed: sliceFeed(feed, pageSize, page),
  });
});

app.get("/comments/:briefref", (req, res) => {
  const briefref = req.params.briefref;

  const matchingComments = comments.filter(
    (comment) => comment.briefref === briefref
  );
  if (matchingComments.length) {
    res.json(matchingComments);
  }

  res.status(404).send("No comments found!");
});

app.listen(4000, function (err) {
  if (err) return err;
  console.log("(HTTP) App now running on port", 4000);
});
