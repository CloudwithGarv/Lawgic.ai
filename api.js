const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Key (directly inserted for demo purposes)
const apiKey = "AQ.Ab8RN6KYN7dr6Vc8hooIPDZSVXqVTCmSiyFv1qcCSbOJuiZR8Q";

if (!apiKey) {
    console.error("Error: API key is not set. Please provide your key.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

// Main API endpoint to process user queries
app.post('/api/process-document', async (req, res) => {
    try {
        const { docType, prompt } = req.body;

        if (!docType || !prompt) {
            return res.status(400).json({ error: 'Missing document type or prompt in request body.' });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Generate a simplified summary based on the document type and user prompt
        const fullPrompt = `You are a legal AI assistant specializing in document summarization. Your task is to provide a simplified, easy-to-understand summary of a legal document. Given the following document type and user question, provide a concise answer.

Document Type: ${docType}
User Question: ${prompt}

Provide a single paragraph summary that explains the key points.`;

        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();

        res.json({ summary: text });

    } catch (error) {
        console.error('Error processing AI request:', error);
        res.status(500).json({ error: 'Failed to process AI request.' });
    }
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
