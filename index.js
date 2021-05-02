const botaoAmarelo = document.getElementById('botao_enviar');

const formulario = document.getElementById('formulario-assinatura');

botaoAmarelo.addEventListener( 'click', () => {
    const campoEmail = document.getElementById('campo_email');

    const conteudo_campoEmail = campo_email.value;;
    if( conteudo_campoEmail.indexOf('@') >= 0) {
        formulario.submit();
    } else {
        alert("Digite seu e-mail correto!")
    }
}
)