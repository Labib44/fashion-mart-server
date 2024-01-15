const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection

async function main() {
  await mongoose.connect(process.env.DATABASE).then(() => {
    console.log(`DataBase connection is succesfull`.red.bold)

    
  })
}
main()

// server
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

