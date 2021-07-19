$( window ).on("load", carregarEstados )
function carregarEstados () {
 $.ajax({
    type: 'GET',
    url:  "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
    dataType: 'json'
}).done(function(data){
    $(data).each(function(indice, id){
    $("#estado").append("<option value='"+ id.sigla +"'>"+id.nome+"</option>");
    })
})
}

$("#estado").change(function(){
    $("#cidade").empty();
    $("#page-content-wrapper").append(carregarCidades)
  })
  
  $("#page-content-wrapper").on("change","#cidade",function(){
    var valor = $(this).val();
   console.log("Valor Escolhido foi: "+valor);
  })

  function carregarCidades () {
    var valor = $("#estado").val();  
 $.ajax({
    type: 'GET',
    url:  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+valor+"/distritos",
    dataType: 'json'
}).done(function(data){
    $(data).each(function(indice, cidade){
    $("#cidade").append("<option value='"+ cidade.sigla +"'>"+cidade.nome+"</option>");
    })
})
}


