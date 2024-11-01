import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.json({
    message: "Server is working",
  });
});

app.listen(5000, () => {
  console.log("Server is running on 5000");
});
