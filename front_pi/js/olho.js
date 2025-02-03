function togglePassword() {
    var senhaInput = document.getElementById('senha');
    var eyeIcon = document.getElementById('eye');

    // Alterna entre mostrar e ocultar a senha
    if (senhaInput.type == "password") {
        senhaInput.type = "text"; // Torna visível
        eyeIcon.src = "../css/img/aberto.png"; // Imagem do olho aberto
    } else {
        senhaInput.type = "password"; // Torna oculta
        eyeIcon.src = "../css/img/fechado.png"; // Imagem do olho fechado
    }
}
