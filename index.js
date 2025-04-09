const express =  require("express");
const connectionDB = require("./config/db");
const seatsRoutes = require("./routes/seats.routes")
const authRoutes = require("./routes/auth.routes");
const dotenv = require("dotenv");

const cors = require('cors');

const app = express();
app.use(cors());
dotenv.config();
connectionDB();
app.use(express.json());

app.get("/",(req, res)=>{
    console.log("unstop assignment");
})

app.use("/api/auth", authRoutes);
app.use("/api/seats", seatsRoutes);

const port = process.env.PORT || 8080;
app.listen(port, ()=>{ console.log(" server running at port = ", port) });