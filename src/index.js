const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const intentRoutes = require("./routes/intent");
const talkRoutes = require("./routes/conversacion");
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/order");
const apiRouter = require("./routes/routes");
// middleware
app.use(cors())
app.use(express.json());
app.use('/api', intentRoutes);
app.use('/api', talkRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use("/whatsapp", apiRouter);


//mongodb connection
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to mongoDB localhost"))
    .catch((error) => console.error(error));

// app runing
app.listen(port, () => {
    console.log("server running on port", port)
});