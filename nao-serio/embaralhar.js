function shuffle(array) {
    var counter = array.length, temp, index;
    array = array.slice();

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

var embaralhar = function (palavra) {
	if (palavra.length <= 3) {
		return palavra;
	}
	var inicial = palavra.slice(0, 1);
	var final = palavra.slice(-1);
	var miolo = palavra.slice(1, -1);
	if (palavra.length == 4) {
		return inicial + miolo.slice(-1) + miolo.slice(0,1) + final;
	}
	var miolo2;
	var miolo_array = miolo.split('');
	do {
		miolo2 = shuffle(miolo_array).join('');
	} while (miolo === miolo2);
	return inicial + miolo2 + final;
};

