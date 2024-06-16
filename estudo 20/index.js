
window.onload = function(){
function minhaClasse(nome) {
    this.nome = nome;

    this.dizerOla = function(){
        document.getElementById('nome').textContent = 'ola, ' + this.nome + '!';
    }
}
let objeto = new minhaClasse('joão');
objeto.dizerOla();
}