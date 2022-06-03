
function mostrarOcultarSenha() {
    const senha = document.getElementById('senha');

    if (senha == 'password') {
        senha.type ='text';
    }else {
        senha.type = 'password';
    }
}





