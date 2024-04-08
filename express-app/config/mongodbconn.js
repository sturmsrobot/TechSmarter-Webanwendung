//this code helps to connnet to your mongodb database once you enter your connect url

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose
  .connect("YOUR_MONOGDB_URL_HERE")
  .then(() => console.log("Connected to database Successfully."))
  .catch((Error) =>
    console.log(`Error while connecting to database: ${Error}.`)
  );
