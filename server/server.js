require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const adminRoute = require("../server/routes/admin.routes");
const productRoute = require("./routes/product.routes")
adminRoute(app);
productRoute(app)

require("./config/mongoose.config");

app.listen(process.env.PORT, () =>
  console.log(`express is running on ${process.env.PORT}`)
);
