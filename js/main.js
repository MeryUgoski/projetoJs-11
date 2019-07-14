$(document).ready(function(){
    const botao = $('button');
    let resultado = $('#resultado');
    



    botao.click(function(){
        let cep = $('#cep-usuario').val();
        const api=`https://viacep.com.br/ws/${cep}/json` ;
        $.getJSON(api,function(retorno_api){
            console.log(retorno_api);
        
        resultado.html(`
            <p>&nbsp </p>
            <p>${retorno_api.logradouro}</p>
            <p>Bairro: ${retorno_api.bairro}</p>
            <p>Cidade : ${retorno_api.localidade}</p>
            <p>Estado : ${retorno_api.uf}</p>
            `);
       
      
        });
        
    });
    
  });
