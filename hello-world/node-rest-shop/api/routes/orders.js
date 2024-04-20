const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders fetched",
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params["orderId"];
  if (id === "something") {
    res.status(200).json({
      message: "Got order with id",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "Got Nothing",
      id: id,
    });
  }
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Add order",
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted order",
  });
});

module.exports = router;
