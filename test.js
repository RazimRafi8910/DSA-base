const screen = Array.from({length:10},()=>(
	Array(10).fill(0)
));


screen[0][1] = 1;
screen[2][2] = 1;
screen[1][4] = 1;
while (true) {
	
for (let i = 0; i < screen.length; i++){
	let newRow = ''
	for (let j = 0; j < screen.length; j++){
		if (screen[i][j] === 0) {
			newRow += '.';
		} else {
			newRow += '#';
		 }
	}

	console.clear();
	setTimeout(() => {
		console.log(newRow)
	},500);
}
}


