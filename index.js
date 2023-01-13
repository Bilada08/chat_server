const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.js')

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors({
    origin: ['http://localhost:3000/', 'https://eice-chat.netlify.app/']
}));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/auth', authRoutes)
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));