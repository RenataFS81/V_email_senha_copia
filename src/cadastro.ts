document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastro-form") as HTMLFormElement;
    const mensagem = document.getElementById("mensagem") as HTMLDivElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que o formulário recarregue a página

        const nome = (document.getElementById("name") as HTMLInputElement).value.trim();
        const sobrenome = (document.getElementById("sobrenome") as HTMLInputElement).value.trim();
        const email = (document.getElementById("email") as HTMLInputElement).value.trim();
        const telefone = (document.getElementById("tel") as HTMLInputElement).value.trim();
        const senha = (document.getElementById("password") as HTMLInputElement).value;
        const confirmarSenha = (document.getElementById("confirmPassword") as HTMLInputElement).value;

        // Validações básicas
        if (!nome || !sobrenome || !email || !telefone || !senha || !confirmarSenha) {
            mensagem.innerHTML = "Todos os campos são obrigatórios!";
            mensagem.className = "alert alert-danger";
            return;
        }

        if (senha.length < 6) {
            mensagem.innerHTML = "A senha deve ter pelo menos 6 caracteres!";
            mensagem.className = "alert alert-danger";
            return;
        }

        if (senha !== confirmarSenha) {
            mensagem.innerHTML = "As senhas não coincidem!";
            mensagem.className = "alert alert-danger";
            return;
        }

        // Se passou por todas as validações, exibir mensagem de sucesso
        mensagem.innerHTML = "Cadastro realizado com sucesso!";
        mensagem.className = "alert alert-success";

        // Simula envio para o backend
        setTimeout(() => {
            window.location.href = "index.html"; // Redireciona para a página de login
        }, 2000);
    });
});
