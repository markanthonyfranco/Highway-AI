import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Define the root route
app.get('/', (req, res) => {
    res.send('Welcome to the Highway-AI API!');
});

// Define your other routes here
app.get('/repo/files', async (req, res) => {
    // Example route for handling GitHub repository files
    res.send('Files route is working');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});