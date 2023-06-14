const readline = require("readline")
const { generateMeta, generateImage } = require("./controllers/openaiController.js")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

// In generateMeta from openaiController
// title is required only for the terminal
// for the app, we need to use req & res
// also instead of send the response into the app
// we use a console
// console.log(description.data.choices[0].message)
// console.log(tags.data.choices[0].message)

// the same goes for desc in generateImage
// console.log(image.data.data[0].url)

// rl.question("YouTube title: \n", (title) => generateMeta(title))
// rl.question("Describe your YouTube thumbnail: \n", (desc) => generateImage(desc))