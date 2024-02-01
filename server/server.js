const express = require("express");
const cors = require('cors');
const app = express();


app.use(cors())

app.get("/api", (req, res) => {
  const menu = [
    {
      id: 1,
      name: "jollof",
      price: "25",
      url: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706729500/ecommerce/flat-lay-table-full-delicious-food-composition_sgkidf.jpg",
    },
    {
      id: 2,
      name: "Fried Chicken",
      price: "29",
      url: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706729501/ecommerce/delicious-fried-chicken-plate_p86bgp.jpg",
    },
    {
      id: 3,
      name: "Meat Snack",
      price: "30",
      url: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706729499/ecommerce/top-view-mix-meat-snacks-with-french-fries-grilled-vegetables-salad-sauces-board_x4ztrp.jpg",
    },
    {
      id: 4,
      name: "Steak and Potato",
      price: "40",
      url: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706485841/ecommerce/grilled-chicken-steak-vegetables-dark-background_1_lpoll6.jpg",
    },
    {
      id: 5,
      name: "Banku and Tilapia",
      price: "40",
      url: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706789364/ecommerce/banku_a4eby0.jpg",
    },
    {
      id: 6,
      name: "Waakye",
      price: "40",
      url: "https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706789363/ecommerce/waakye_y1gy0g.jpg",
    },
  ];

  res.json({ menu });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
