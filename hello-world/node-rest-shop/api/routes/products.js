const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params["productId"];
  if (id === "something") {
    res.status(200).json({
      message: "You discovered something",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "Nothing",
      id: id,
    });
  }
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(201).json({
    message: "Handling POST requests to /products",
    createdProduct: product,
  });
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated product",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted product",
  });
});

module.exports = router;
