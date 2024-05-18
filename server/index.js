import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "start",
});

con.connect();

app.post("/registe", (req, resp) => {
  const { name, email, password } = req.body;
  con.query(
    "INSERT INTO users(name,email,password) VALUES (?,?,?)",
    [name, email, password],
    (err) => {
      if (err) {
        resp.status(404).json({ message: "internal server error" });
      } else {
        resp.status(200).json({ message: "Successfull" });
      }
    }
  );
});
app.listen(5000, () => {
  console.log("Server is live at http://localhost:5000");
});
