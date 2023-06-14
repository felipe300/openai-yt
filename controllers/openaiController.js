const openai = require("../config/openaiConfig.js")

const generateMeta = async (req, res) => {
	try {
		const { title } = req.body
		const description = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content: `Come up with a description for a YouTube video called ${title}`,
				},
			],
			max_tokens: 100,
		})

		const tags = await openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content: `Come up with 10 keywords for a YouTube video called ${title}`,
				},
			],
			max_tokens: 100,
		})

		res.status(200).json({
			description: description.data.choices[0].message,
			tags: tags.data.choices[0].message
		})
	} catch (err) {
		res.status(500).json({
			message: `No se ha podido cargar un Titulo. Error: ${err}`
		})
	}
}

const generateImage = async (req, res) => {
	try {
		const image = await openai.createImage({
			prompt: req.body.prompt,
			n: 1,
			size: "512x512"
		})

		res.status(200).json({
			url: image.data.data[0].url
		})
	} catch (err) {
		res.status(500).json({
			message: `No se ha podido cargar una imagen. Error: ${err}`
		})
	}
}

module.exports = { generateMeta, generateImage }
