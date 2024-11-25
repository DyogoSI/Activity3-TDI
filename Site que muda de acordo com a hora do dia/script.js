function updateTimeTheme() {
    const container = document.getElementById("container");
    const greeting = document.getElementById("greeting");
    const message = document.getElementById("message");
    const timeImage = document.getElementById("time-image");

    const now = new Date();
    const hours = now.getHours();

    if (hours >= 6 && hours < 12) {
        // Manhã
        container.style.background = "linear-gradient(to bottom, #FFDDC1, #FF9E80)";
        greeting.textContent = "Bom dia!";
        message.textContent = "Que seu dia seja incrível!";
        timeImage.src = "day-966186_960_720.jpg";
        timeImage.alt = "Imagem da manhã";
    } else if (hours >= 12 && hours < 18) {
        // Tarde
        container.style.background = "linear-gradient(to bottom, #FFD54F, #FFAB00)";
        greeting.textContent = "Boa tarde!";
        message.textContent = "Espero que você esteja tendo uma ótima tarde!";
        timeImage.src = "tarde.jpg";
        timeImage.alt = "Imagem da tarde";
    } else {
        // Noite
        container.style.background = "linear-gradient(to bottom, #001E3C, #1565C0)";
        greeting.textContent = "Boa noite!";
        message.textContent = "Hora de relaxar e descansar.";
        timeImage.src = "noite.jpg";
        timeImage.alt = "Imagem da noite";
    }
}

// Chama a função ao carregar a página
updateTimeTheme();
