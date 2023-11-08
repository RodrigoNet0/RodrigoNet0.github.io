

const githubBtn = document.getElementById("githubBtn");
const instagramBtn = document.getElementById("instagramBtn");
const linkedinBtn = document.getElementById("linkedinBtn");

function addAnimation(button) {
    button.style.animation = "pulse 0.5s ease";
    
    // Limpar a animação após a conclusão (opcional)
    button.addEventListener("animationend", () => {
        button.style.animation = "";
    });
}

githubBtn.addEventListener("click", () => {
    // Redirecionar para a página do GitHub
    window.location.href = "https://github.com/RodrigoNet0";
    // Adicionar animação
    addAnimation(githubBtn);
});

instagramBtn.addEventListener("click", () => {
    // Redirecionar para a página do Instagram
    window.location.href = "https://www.instagram.com/rodrigo.neto/";
    // Adicionar animação
    addAnimation(instagramBtn);
});

linkedinBtn.addEventListener("click", () => {
    // Redirecionar para a página do LinkedIn
    window.location.href = "https://www.linkedin.com/in/rodrigonetoo/";
    // Adicionar animação
    addAnimation(linkedinBtn);
});

alert("Welcome")