const express = require('express');
const cors = require('cors');
const routes = require('./routes/main.routes');

const app = express();
const origins = [
    "https://taxy.vercel.app"
];

app.use(cors({
    origin: origins,
    credentials: true,
}));

app.use(express.json({ limit: '5mb' }));
app.use('/', routes);

const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});