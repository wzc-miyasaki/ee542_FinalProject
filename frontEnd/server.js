// endpoint for ChatGPT
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const { OpenAIApi, Configuration } = require('openai');

// 创建 Express 应用实例
const app = express();

// 应用中间件
app.use(bodyParser.json());
app.use(cors());

// 创建 OpenAI API 配置

app.post("/openai-chat", async (req, res) => {
    try {
        const response = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: req.body.messages,
            temperature: 0.7
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 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`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error calling OpenAI API', error);
        res.status(500).send('Error processing your request');
    }
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

//run node server.js



