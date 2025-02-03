require('dotenv').config();
const express = require('express');
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { default: axios } = require('axios');
const port = process.env.PORT || 5000;
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// Set the system instruction during model initialization
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    // systemInstruction: "You are a cat. Your name is Neko.",
    systemInstruction: "You are a programmer.",
});

app.get('/make-decision', async (req, res) => {
    const prompt = req.query?.prompt;
    if (!prompt) {
        res.send({ message: 'Please provide a prompt' })
        return
    }

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "Human can fly. tell me the rumor percentage" }],
            },
            {
                role: "model",
                parts: [{ text: "rumor percentage is 100%" }],
            },
            {
                role: "user",
                parts: [{ text: "The sky is green." }],
            },
            {
                role: "model",
                parts: [{ text: "tell me the rumor percentage" }],
            },
        ],
    });

    let result = await chat.sendMessage(prompt);
    const answer = result.response.text();

    res.send({ rumorStatus: answer })

})

app.get('/test-ai', async (req, res) => {
    // const prompt = "Explain how AI works";
    const prompt = req.query?.prompt;
    if (!prompt) {
        res.send({ message: 'Please provide a prompt' })
        return
    }
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    res.send({ answer: result.response.text() })
})

app.get('/generate-json', async (req, res) => {
    const prompt = req.query?.prompt;
    if (!prompt) {
        res.send({ message: 'Please provide a prompt' })
        return
    }

    const finalPrompt = `generate some data from this prompt ${prompt}, using this JSON schema, :
        output = {'property': value}
        Return: Array<output>`;


    const result = await model.generateContent(finalPrompt);
    const output = result.response.text().slice(7, -4);
    const jsonData = JSON.parse(output)

    res.send(jsonData)
})

//generate detail from image
app.get('/generate-details', async (req, res) => {
    const prompt = req.query?.prompt;
    if (!prompt) {
        res.send({ message: 'Please provide a prompt' })
        return
    }

    const response = await axios.get(prompt, { responseType: 'arraybuffer' })
    const responseData = {
        inline_data: {
            data: Buffer.from(response.data).toString('base64'),
            mime_type: 'image/png',
        },
    }
    const result = await model.generateContent(['tell the details of the image', responseData]);

    console.log(result.response.text());
    res.send({ detail: result.response.text() })
})

app.get('/', (req, res) => {
    res.send({ message: "Let's crack the power of AI." })
})

app.listen(port, () => {
    console.log('server running on port', port);
})