function calculo (quantia, valorNota){
	var sobra = quantia % valorNota;
	var numeroNotas = (quantia - sobra) / valorNota;
	if (sobra == 1 || sobra == 3){
		console.log(numeroNotas-1 + " Notas de " + valorNota + " reais");
		return (sobra + valorNota);
	}
	else{
		console.log(numeroNotas+ " Notas de " + valorNota + " reais");
		return (sobra);
	}
}

var quantia = (process.argv[2]);
quantia = calculo(quantia,100);
quantia = calculo(quantia,50);
quantia = calculo(quantia,20);
quantia = calculo(quantia,10);
quantia = calculo(quantia,5);
quantia = calculo(quantia,2);