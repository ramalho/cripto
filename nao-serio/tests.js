test( "shuffle", function() {
	deepEqual( shuffle([1]), [1], "vetor [1]" );
	ordenado = [1, 2, 3, 4, 5, 6, 7, 8];
	misturado = shuffle(ordenado);
	ok(ordenado != misturado, ordenado.toString()+" -> "+misturado.toString());
	deepEqual( misturado.sort(), ordenado, "vetor completo");	
});

test( "embaralhar", function() {
	deepEqual( embaralhar('que'), "que", "3 caracteres" );
	deepEqual( embaralhar('bola'), "bloa", "4 caracteres" );
	ok( embaralhar('embaralhar') != 'embaralhar', "10 caracteres" );
});
