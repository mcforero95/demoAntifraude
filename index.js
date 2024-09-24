const express = require('express');
const { handleSuspiciousTransaction } = require('./controllers/fraudController');

const app = express();
app.use(express.json());

app.post('/validate-transaction', handleSuspiciousTransaction);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});