const express = require("express");
const indexCtrl = require("./controllers/index");
const userCtrl = require("./controllers/user");
const topicCtrl = require("./controllers/topic");

const router = express.Router();

// 首页相关
router.get("/", indexCtrl.showIndex);

// 用户模块
router
  .get("/signin", userCtrl.showSignin)
  .post("/signin", userCtrl.handleSignin)
  .get("/signup", userCtrl.showSignup)
  .post("/signup", userCtrl.handleSignup)
  .post("/signout", userCtrl.handleSignout);

//  话题模块
router
  .get("/topic/create", topicCtrl.showCreate)
  .post("/topic/create", topicCtrl.handleCreate)
  .get("/topic/show", topicCtrl.showTopic)
  .get("/topic/edit", topicCtrl.showEdit)
  .post("/topic/edit", topicCtrl.handleEdit)
  .post("/topic/delete", topicCtrl.handleDelete);
module.exports = router;
