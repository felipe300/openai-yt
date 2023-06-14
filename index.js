const express = require("express")
const { generateMeta, generateImage } = require("./controllers/openaiController.js")

const app = express()
const PORT = 3000

app.use(express.json())

app.get('', (req, res) => { })
app.post('/openai/meta', generateMeta)
app.post('/openai/image', generateImage)

app.listen(
	PORT,
	() => console.log(`Server listening on port: ${PORT}🔥🔥🔥`)
)
