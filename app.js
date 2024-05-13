document.write("<h1>Addition, Subtraction, Multiplication, Division, and Modulus </h1>");
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modulus = num1 % num2;
document.write("Sum of 5 and 3 is: " + sum + "<br>");
document.write("Difference of 5 and 3 is: " + difference + "<br>");
document.write("Product of 5 and 3 is: " + product + "<br>");
document.write("Quotient of 5 and 3 is: " + quotient + "<br>");
document.write("Modulus of 5 and 3 is: " + modulus + "<br><br>");



document.write("<h1>Declaration of variables </h1>");
var variable;
document.write("Value after variable declaration is: " + variable + "<br>");
variable = 5;
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable += 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>");
var remainder = variable % 3;
document.write("The remainder is: " + remainder + "<br><br>");




document.write("<h1> Cost of movie tickets in PKR</h1>");
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR<br><br>");



document.write("<h1>Table of 4</h1>");
var number = 4;
document.write(" Table of " + number + ":<br>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
document.write("<br>");





document.write("<h1>Temperature Converter</h1>");
var celsiusTemperature = 25;
var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");
var fahrenheit = 70;
var celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius + "°C<br><br>");




document.write("<h1>Shopping Cart</h1>");
var priceOfItem1 = 650;
var priceOfItem2 = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 = 7;
var shippingCharges = 100;
document.write("Price Of Item 1 = 650 <br> Quantity Of Item 1 = 3 <br> Price Of Item 2 = 100 <br> Quantity Of Item2 = 7 <br> Shipping Charges = 100 <br>")
var totalCost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges;
document.write("Total cost of your order is: " + totalCost + " PKR<br><br>");




document.write("<h1>Marks Sheet</h1>");
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Total Marks = 980 <br> Obtained Marks = 804 <br>");
document.write("Percentage: " + percentage + "%<br><br>");




document.write("<h1>Currency in PKR</h1>");
var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateUSDtoPKR = 104.80;
var exchangeRateSARtoPKR = 28;
var totalPKR = (usDollars * exchangeRateUSDtoPKR) + (saudiRiyals * exchangeRateSARtoPKR);
document.write("Total currency in PKR: " + totalPKR + " PKR<br><br>");






document.write("<h1>Arithmetic operations in a single expression</h1>");
var number = 10;
var result = (((number + 5) * 10) / 2);
document.write("Result: " + result + "<br><br>");




document.write("<h1>Age Calculator</h1>");
var currentYear = 2016;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("Current Year = 2016 <br> Birth Year = 1992 <br>");
document.write("Your age is : " + age + " <br><br>");




document.write("<h1>The  Geometrizer</h1>");
var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("The radius of a circle is " + radius + "<br>");
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2) + "<br><br>");





document.write("<h1>Lifetime Supply Calculator</h1>");
var favoriteSnack = "Chocolate chip";
var currentAge = 15;
var estimatemaximumAge = 65;
var AmountOfSnackPerDay = 3;
var yearsRemaining = estimatemaximumAge - currentAge;
var totalSnacksRequired = yearsRemaining * AmountOfSnackPerDay;
document.write(" favoriteSnack = Chocolate Chip <br> Current Age = 15 <br> Estimate Maximum Age = 65 <br> Amount Of Snack Per Day = 3 <br><br>")
document.write("You will need " + totalSnacksRequired + " " + favoriteSnack + " to last you until the ripe old age of " +  estimatemaximumAge);



