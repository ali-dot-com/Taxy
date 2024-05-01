const express = require('express');
const cors = require('cors');
const routes = require('./routes/main.routes');

const app = express();
const origins = [
    "http://localhost",
    "http://localhost:3000",
];

app.use(cors({
    origin: origins,
    credentials: true,
}));

// app.use(bodyParser.json());
app.use(express.json({ limit: '5mb' })); // Adjust the limit as needed
app.use('/', routes);

app.get("/check", (req,res) => {
    res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});