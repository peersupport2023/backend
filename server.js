require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-route");
const contactRoute = require("./router/contact-service");
const serviceRoute = require("./router/service-route");
const mentorRoute = require("./router/mentor-route");
const errorMiddleware = require("./middlewares/error-middleware");
const connectDB = require("./utils/db");

const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is allowed, or allow all origins with '*'
    if (!origin || origin === "https://peersupport.co.in") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "POST,GET,PUT,DELETE,HEAD,PATCH",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // for parsing application/json
app.use("/auth", authRoute);
app.use("/form", contactRoute);
app.use("/api", serviceRoute);
app.use("/ment", mentorRoute);
app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
