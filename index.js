const tarots = require('./tarots.js')

class Reed {
	constructor(){
		// each card has a thread
	}

	simulate(iterations){
		// counter
		let counter = 0;

		// loop on a setInterval 
		while(counter < iterations) {

			// generate batch
			const batch = this.generateBatch(3)
			console.log(batch)
			// save batch locally and to textile

			counter++
		}

	}

	generateBatch(batchSize){

		const batch = []

		// generate 3 random cards
		for(let i = 0; i < batchSize; i++){

			// randomize between: 78
			const ran = 1 + Math.round(Math.random() * 77)

			batch.push(tarots[ran])
		}

		return batch
	}

	atlas(){
		// graph on d3 network
	}
}

module.exports = Reed