const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.js')

const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(( req, res ) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        'https://eice-chat.netlify.app/',
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    );
    res.setHeader(
        "Access-Control-Allow-Origin",
        "GET, POST, PUT, DELETE, OPTIONS",
    );
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/auth', authRoutes)
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));