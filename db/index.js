const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb+srv://helenasangar:PrT2iWqWEX3qs9tp@elmegafono.vqqod4s.mongodb.net/"
// process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/elmegafono"; 



mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
