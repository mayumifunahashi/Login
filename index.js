
function mostrarOcultarSenha() {
    const senha = document.getElementById('checkbox');

    if (senha == 'password') {
        senha.type ='text';
    }else {
        senha.type = 'password';
    }
}





