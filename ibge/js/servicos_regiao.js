$("#botao-consultar").on("click", consultar);

function consultar(){
	var idRegiao = $("#regiao").val();
    $( "tr" ).empty();
	$.ajax({
			url:  "https://servicodados.ibge.gov.br/api/v1/localidades/regioes/"+idRegiao+"/estados"
		}).done(function(dados){
            $(dados).each(function(indice, estado){
                $("#estados").append("<tr><td>"+ estado.nome + "</td>" + "<td>"+ estado.sigla + "</td></tr>");
                $("#mensagem").addClass("alert-success");
                document.getElementById("mensagem").innerHTML = "Os dados solicitados estão disponiveis a seguir:";
            })   
    })

}

$( window ).on("load", carregarRegioes )
function carregarRegioes () {
  
 $.ajax({
    type: 'GET',
    url:  "https://servicodados.ibge.gov.br/api/v1/localidades/regioes/",
    dataType: 'json'
}).done(function(data){
    $(data).each(function(indice, regiao){
    $("#regiao").append("<option value='"+ regiao.sigla +"'>"+regiao.nome+"</option>");
    })
})
}


