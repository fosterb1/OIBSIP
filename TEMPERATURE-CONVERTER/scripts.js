function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (inputUnit === 'celsius') {
        celsius = inputValue;
        fahrenheit = (inputValue * 9 / 5) + 32;
        kelvin = inputValue + 273.15;
    } else if (inputUnit === 'fahrenheit') {
        celsius = (inputValue - 32) * 5 / 9;
        fahrenheit = inputValue;
        kelvin = (inputValue - 32) * 5 / 9 + 273.15;
    } else if (inputUnit === 'kelvin') {
        celsius = inputValue - 273.15;
        fahrenheit = (inputValue - 273.15) * 9 / 5 + 32;
        kelvin = inputValue;
    }

    document.getElementById('outputCelsius').innerText = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('outputFahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('outputKelvin').innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
