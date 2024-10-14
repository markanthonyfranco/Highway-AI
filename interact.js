// Route to interact with OpenAI GPT-4
app.post('/gpt-suggestions', async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 150,
            }),
        });

        const data = await response.json();
        res.json({ gptResponse: data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: 'Error interacting with OpenAI' });
    }
});