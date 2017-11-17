var nR = 600851475143;
var nT = 113195;
var n = 1000;
var primi = [];
var trovato = false;
var ciclo = true;

function setup() {

	for (var x = 2; x < nT; x++) {
		var ciclo = true;
		for (var i = 0; i < primi.length; i++) {
			if (x % primi[i] == 0 && ciclo == true) {
				ciclo = false;
				break;
			}
		}
		if (ciclo == true) {
			primi.push(x);
			console.log(x, " - Numero ", primi.length)
		}

	}
}
function draw() {

}