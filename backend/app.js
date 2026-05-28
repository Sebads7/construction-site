const express = require("express");

const app = express();
const cors = require("cors");
const sendEmail = require("./controllers/sendEmail");

const port = 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "<html><body style='text-align: center; padding: 50px;'><h1>API is running. Use the /send-email route to send emails. Happy Coding!😁😎 🚀</h1></body></html>"
  );
});

app.post("/send-email", async (req, res) => {
  try {
    await sendEmail(req.body);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending email");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
