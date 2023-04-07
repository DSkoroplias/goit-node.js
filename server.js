const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://usrbase:ya0kcVDa4epHOTI6@cluster0.ix9tskj.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .catch((error) => console.log(error.message));

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
