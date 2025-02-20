/*
5️⃣ Task: Create a TemperatureConverter Class
Concepts Covered: Static methods, utility functions.

🔹 Task:

Create a class TemperatureConverter.
Add static methods celsiusToFahrenheit(temp) and fahrenheitToCelsius(temp).
Call them without creating an instance (because they are static).
*/
class TemperatureConverter{
    constructor(){
        this.temp = temp
    }
    static celsiusToFahrenheite(temp){
        const ans = temp*(9/5)+32;
        console.log(ans);
        return ans 
    }
    static FahrenheiteTcelsius(faher){
        const ans2 = faher*(9/5)-32;
        console.log(ans2);
        return ans2;
    }
}

TemperatureConverter.celsiusToFahrenheite(15)
TemperatureConverter.FahrenheiteTcelsius(560)