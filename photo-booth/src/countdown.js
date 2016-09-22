function setCount(counterEl, count) {
	counterEl.innerHTML = count > 0? count : ''
}

function countDown(counterEl, downFrom, currentCount, done) {
	const count = downFrom - currentCount
	setCount(counterEl, count);

	if(currentCount === downFrom) {
		done()
	} else {
		setTimeout(_=> {
			countDown(counterEl, downFrom, ++currentCount, done)
		}, 1000)
	}
}

exports.start = (counterEl, downFrom, done) => {
	/*for(let i = 0; i<=downFrom;++i) {
		console.log(i)
		setTimeout(_=> {
			const count = downFrom - i
			setCount(counterEl, count)
			if(count == downFrom) {
				done()
			}
		}, i * 1000)
	}*/
	countDown(counterEl, downFrom, 0, done) 
}