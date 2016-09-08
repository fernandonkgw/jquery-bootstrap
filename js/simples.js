$("#formPagamento").submit(function(){

    var pagamento = {
        matricula : $("#matricula").val(),
        data : $("#dataPagamento").val(),
        cota : $("#cota option:selected").text()
    };

	var corpoTB = $('table#tabelaPagamentos>tbody'); //pega o objeto TBODY da tabela
	$('<tr><td>'+ pagamento.matricula + '</td><td>' + pagamento.data + '</td><td>' + pagamento.cota + '</td></tr>').appendTo(corpoTB);
    
    return false;
});