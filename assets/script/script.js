function calcular() {
    var elementos_valor = document.getElementById("txtvalor");
    var elementos_parcelas = document.getElementById("txtparcelas");
    var elementos_respostas = document.getElementById("txtresult");
    
    var valorcompra = parseFloat(elementos_valor.value);
    var qtdparcelas = parseInt(elementos_parcelas.value);
    
    var msg = "";
    var valorfinal = 0;
    var cor="";
    
    if (qtdparcelas == 1) {
        valorfinal = valorcompra;
        msg = "1X" + valorfinal;
      
    } else if (qtdparcelas == 2) {
        valorfinal = (valorcompra + (valorcompra * 0.03))/2;
        msg = "2X " + valorfinal;
       
    } else {
        valorfinal = (valorcompra + (valorcompra * 0.07))/4;
        msg = "4X " + valorfinal;
    
    }  
    elementos_valor.value="";
    elementos_respostas.value = msg;
}
