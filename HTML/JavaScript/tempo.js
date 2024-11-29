async function buscarClima() {
    const cidade = document.getElementById("cidade").value;
    const resultado = document.getElementById("resultado");
    const mensagemErro = document.getElementById("mensagem-erro"); // Seletor da mensagem de erro

    if (!cidade) {
        mensagemErro.style.display = "block"; // Exibe a mensagem de erro
        resultado.innerHTML = ''; // Limpa o resultado anterior
        return;
    }

    mensagemErro.style.display = "none"; // Esconde a mensagem de erro
    resultado.innerHTML = ''; // Limpa o resultado anterior

    try {
        const apiKey = "5c2b00904ffdc5d6a653ce6ca832cace";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error("Cidade não encontrada. Verifique o nome ou tente outra.");
        }

        const data = await response.json();

        const weatherContainer = document.createElement("div");
        weatherContainer.classList.add("weather-container");

        weatherContainer.innerHTML = 
            `<div class="city-name">Cidade: <span id="city-name">${data.name}</span></div>
            <div class="weather-icon">
                <span id="weather-emoji">🌤️</span>
            </div>
            <div class="temperature">
                <span id="temp">${Math.round(data.main.temp)}°C</span>
            </div>
            <div class="description">
                <span id="weather-description">${data.weather[0].description}</span>
            </div>
            <div class="extra-info">
                <span>Humidade: <span id="humidity">${data.main.humidity}%</span></span>
                <span>Vento: <span id="wind-speed">${data.wind.speed} km/h</span></span>
            </div>`;

        resultado.appendChild(weatherContainer);

        const weatherMain = data.weather[0].main.toLowerCase();
        const weatherEmoji = document.getElementById("weather-emoji");

        const currentHour = new Date().getHours();
        const isDaytime = currentHour >= 6 && currentHour < 18;

        if (weatherMain.includes("cloud")) {
            weatherEmoji.textContent = "☁️"; 
        } else if (weatherMain.includes("rain")) {
            weatherEmoji.textContent = "🌧️"; 
        } else if (weatherMain.includes("clear")) {
            if (isDaytime) {
                weatherEmoji.textContent = "☀️"; 
            } else {
                weatherEmoji.textContent = "🌜"; 
            }
        } else if (weatherMain.includes("snow")) {
            weatherEmoji.textContent = "❄️"; 
        } else {
            weatherEmoji.textContent = "🌫️"; 
        }

    } catch (error) {
        resultado.innerHTML = 
            `<p class="error-message">Erro: ${error.message}</p>
            <p class="error-suggestion">Tente verificar se o nome da cidade está correto. Você pode tentar uma cidade próxima.</p>`;
    }
}
