// quando a pagina carrega
window.onload = function(){
    // quando o botao DIGITAR e clicado
    document.querySelector('#caixa button').onclick = function(){
        var texto = document.querySelector('#caixa input').value;
        console.log('voce digitou:' + texto);
        document.querySelector('#caixa input').value = '';//limpa o campo de entrada
    };

    //quando o botao clique aqui e clicado 
    document.querySelector('#botao-container button').onclick = function(){
        alert('voce clicou no botão!');
    };
};