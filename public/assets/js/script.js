"use strict";
// Capturando os elementos do formulário
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");
// Dados de login de teste (simulação de um backend)
const validUser = {
    email: "admin@exemplo.com",
    password: "123456"
};
// Evento de submissão do formulário
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o reload da página
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    // Validação simples
    if (email === "" || password === "") {
        errorMessage.textContent = "Preencha todos os campos.";
        return;
    }
    if (email !== validUser.email || password !== validUser.password) {
        errorMessage.textContent = "E-mail ou senha inválidos!";
        return;
    }
    // Se for bem-sucedido
    alert("Login realizado com sucesso!");
    window.location.href = "https://www.google.com.br/"; // Redirecionamento para uma página fictícia
});
