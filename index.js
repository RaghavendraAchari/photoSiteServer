const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config");

const { google } = require("googleapis");
const credentials = require("./credentials.json");
const scopes = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);
const drive = google.drive({ version: "v3", auth });

const port = config.app.port;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

var driveDeatails = null;

app.get("/", (req, res) => {
  drive.files.list({ pageSize: 2, fields: "*" }, (err, res) => {
    if (err) throw err;

    const files = res.data.files;

    if (files.length) {
      files.map(file => {
        console.log(file);
      });
      driveDeatails = files;
    } else {
      console.log("No files found");
      res.send("Error 404");
      return;
    }
  });

  if (driveDeatails) {
    res.send(driveDeatails);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
