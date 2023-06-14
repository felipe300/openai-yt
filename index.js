const readline = require("readline")
const { generateMeta, generateImage } = require("./controllers/openaiController.js")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

// rl.question("YouTube title: \n", (title) => generateMeta(title))
rl.question("Describe your YouTube thumbnail: \n", (desc) => generateImage(desc))
