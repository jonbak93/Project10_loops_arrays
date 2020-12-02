function Call_Loop() {
    var beta = " "; //creating a space between letters
    var alpha = ["A", "B", "C", "D"]; //creating an array of alphabets
    let i = alpha[0]; //assigning letter "A" at index 0 to i
    let k = alpha[-1]; //assigning last letter in array to k
    while (i < k) { //while i is less than k, print the remainder of the array
        beta += "<br>" + alpha;
        i++;

    }
    document.getElementById("Loop").innerHTML = alpha; //linking the function to HTML

}


function muayThai() {
    let fighter = { type: "Clincher", kick: "Round Kick", punch: "Cross-Hook-Cross", knee: "Flying Knee" }; //creating an object
    fighter.kick = "Teep";
    fighter.knee = "Spear Knee";
    document.getElementById("kickboxing").innerHTML = "The Nak Muay's favorite knee technique is " + fighter.knee; //connecting it to HTML
}


function constant_function() {
    const motorcycle = { type: "Dirt Bike", brand: "Yamaha", color: "blue" }; //creating an object
    motorcycle.brand = "Kawasaki";
    motorcycle.color = "Green";
    motorcycle.price = "$5000";
    document.getElementById("Constant").innerHTML = "The cost of the " + motorcycle.color + " " + motorcycle.brand + " " + motorcycle.type + " was " + motorcycle.price;
    //connecting object to HTML and using keywords in a sentence
}




function array_Functions() {
    var a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    document.getElementById("Array").innerHTML = a;
} //creating an array of the alphabets and connecting it to the HTML page



var heroes = ["Spider-Man", "Wolverine", "Hulk", "DareDevil", "Batman"]; //creating a for loop that list all the heroes in the array 
var i;
var content = "";

function forLoop() {
    for (i = 0; i < heroes.length; i++) {
        content += heroes[i] + "<br>";
    }
    document.getElementById("List_of_Heroes").innerHTML = content;
}



function stringLength() { //using the string.length() property and displaying it in the console
    var str1 = "This is how you use the string length property.";
    var len = str1.length();
    console.log(len);
}
