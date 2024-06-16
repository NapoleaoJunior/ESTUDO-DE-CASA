const nomeInput = document.getElementById('nome');
const senhaInput = document.getElementById('senha');
const entrarButton = document.querySelector('button');

entrarButton.addEventListener('click',() => {
const nome = nomeInput.value.trim();
const senha = senhaInput.value.trim();

if(nome === '' || senha === ''){
    alert('por favar, preecha todos os campos');
}else{
    alert('usuario autenticado');
}
});