// JAVASCRIPT Assignment # 1
//Alerts

// Question #1
// alert("Hello");

// Questiom #2
// alert("Error! Please enter a valid Password");

// Question #3
// alert("welcome to JS land....\nHappy Coding")

// Question #4
// alert("Welcome to JS land...");
// Part 2 is not in book

// Question #5
// ???????????

// Question #6
// See Questio #7 answer

// Question #7
// Go in my HTML document to see



// JAVASCRIPT Assignment # 2
//Variable for strings

// Question #1
// var username="";

// Question #2
// var myName="M Usman";

// Question #3
// var message="Hello World";
// alert(message);

// Question #4
// var studentName="Jhone Doe";
// alert(studentName);
// .......................
// var age="15 year old";
// alert(age);
// .......................
// var qualifications="Certified Mobile Application Development";
// alert(qualifications);

// Question #5
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

// Question #6
// var email="example@example.com";
// var b="My email address is ";
// alert(b+email);

// Question #7
// var book="A smarter way to learn JavaScript";
// var whatYouareTryingtoLearn="I am trying to learn A Book ";
// alert(whatYouareTryingtoLearn+book)

// Question #8
// document.write("Yah! I can write HTML content through javascript.");

// Question #9
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");



// JAVASCRIPT Assignment # 3
//Variable for numbers

// Question #1
// var me="I am ";
// var age=15;
// var howOld=" years old";
// alert(me+age+howOld);

// Question #2
// Not In Book :(

// Question #3
// var birthYear=1990;
// document.write("My birthyear is "+ birthYear + "<br />" + "Data type of my decleared variable is number");

// Questiom #4
// var yourName=prompt("What is your name?","John Doe");
// var product=prompt("What do you want to buy","T-Shirt(s)") 
// var quantity=prompt("How many T-shirts you want to buy from XYZ Clothing store?","5")
// document.write(yourName +" Ordered "+quantity+product+ " on XYZ Clothing store?")



// JAVASCRIPT Assignment # 4
//VARIABLE NAMES: LEGAL & ILLEGAL

// Question #1
// var myName="Jhon",age="18",class="10th";

// Question #2
// Legal Variables
// var car="Anycar";
// var myCar="Ferrari";
// var car1="Honda";
// var $price$="30dollar";
// var shirt_price="20dollar";
// Illegal Variables
// var "car"="Anycar";
// var 123="number";
// var const="illegal",alert="illegal";
// var my car="Cant contain any space";
// var used-car="Any car";

// Question #3
// document.write("<strong>Rules for naming JS variables</strong>")
// document.write("<br />")
// document.write("Variable names can only contain Numbers , $ and _ .For example: $my_1stVariable")
// document.write("<br />")
// document.write(" Variables must begin with a $ or _ . For example : $name, _name or name")
// document.write("<br />")
// document.write(" Variable names are case sensitive")
// document.write("<br />")
// document.write(" Variable names should not be JS Keyword")



// JAVASCRIPT Assignment # 5
//Maths Expressions

// Question #1
// var a= 3; 
// var b= 5; 
// var c=a+b;
// document.write("The sum of " +a +" and "+b+" is "+c);

// Question #2
// For Subtraction
// var a= 3; 
// var b= 5; 
// var c=b-a;
// document.write("The subtract of " +a +" from "+b+" is "+c);
// For Multiplication
// var a= 3; 
// var b= 5; 
// var c=a*b;
// document.write("The Multiply of " +a +" and "+b+" is "+c);
// For Division
// var a= 3; 
// var b= 5; 
// var c=a/b;
// document.write("The Division of " +a +" and "+b+" is "+c);
// For Modulus
// var a= 3; 
// var b= 5; 
// var c=a%b;
// document.write("The Modulus of " +a +" and "+b+" is "+c);

// Question #3
// var a;
// document.write("Value after variable declaration is "+a);
// document.write("<br />")
// a="5";
// document.write("Initial value: "+5)
// document.write("<br />")
// a++;
// document.write("Value after increment is: "+ a);
// document.write("<br />")
// document.write("Value after addition is: ");
// a=a+7;
// document.write(a)
// document.write("<br />")
// a--;
// document.write("Vale after decrement is :" + a)
// document.write("<br />")
// a=a%3;
// document.write("The remainder is : "+ a)

// Question #4
// var costOfOneticket="600"
// document.write("Total cost to buy 5 tickets of a movie is " + costOfOneticket*5 +"PKR")

// Question #5
// var a=5;
// for (var i = 1; i <=10; i++){
//     document.write(a+ " x" +i +" = " +a*i +"<br>");
// }

// Question #6
// var degree=40;
// document.write(degree+"oC" +" is ");
// document.write((degree*9/5)+32+"oF"+"<br>");
// var fahenhiet=78.8;
// document.write(fahenhiet+"oF" +" is ")
// document.write(((fahenhiet-32)*5)/9 +"oC"+"<br>");

// Question #7
// var item1=650;
// var item2=100;
// var quantity1=3;
// var quantity2=7;
// var shippingCharges=100;
// document.write("<h1>Shopping Cart</h1>"+"<br>");
// document.write("Price of item1 "+ item1 +"<br>");
// document.write("Quantity of item1 "+ quantity1 +"<br>");
// document.write("Price of item2 "+ item2 +"<br>");
// document.write("Quantity of item2 "+ quantity2 +"<br>");
// document.write("Shipping charges"+shippingCharges+"<br>");
// document.write("Total cost of your order is "+(item1*quantity1+item2*quantity2+shippingCharges))

// Question #8
// var totalMarks=980;
// var marksObtained=804;
// document.write("<h1>Marks Sheet</h1>"+"<br>");
// document.write("Total Marks: "+totalMarks+"<br>");
// document.write("Obtained Marks: "+marksObtained+"<br>");
// document.write("Percentage: "+(marksObtained/totalMarks)*100+"%")

// Question #9
// document.write("<h1>Currency In PKR</h1>"+"<br>");
// var totalDollars=10;
// var totalRiyals=25;
// var dollar1=104.80;
// var riyal1=28;
// document.write(totalDollars+"Dollars "+totalRiyals+"Riyals"+"<br>")
// document.write("Total currency in PKR "+(totalDollars*dollar1+totalRiyals*riyal1))

// Question #10
// var a=3;
// console.log(((a+5)*10)/2)

// Question #11
// var currentYear=2021;
// var birthYear=1998;
// document.write("<h1>Age Calculator</h1>"+"<br>");
// document.write("Current Year "+currentYear+"<br>")
// document.write("Birth Year "+birthYear+"<br>")
// document.write("Your Age "+(currentYear-birthYear)+"<br>")

// Question #12
// document.write("<h1>The Geometrizer</h1>"+"<br>");
// var radiusCircle=20;
// document.write("The circumference of cicle is "+(2*3.142*radiusCircle)+"<br>")
// document.write("The area is "+3.142*(radiusCircle*radiusCircle)+"<br>");

// Question #13
// var favouriteSnack="lays";
// var currentAge=17;
// var estimatedmaxAge=65;
// var snackperDay=2;
// var totalDaysIn65year=23725;
// document.write("<h1>The lifetime supply calculator</h1>"+"<br>");
// document.write("Favourite Snack: "+favouriteSnack+"<br>")
// document.write("Current Age: "+currentAge+"<br>")
// document.write("Estimated Max Age: "+estimatedmaxAge+"<br>")
// document.write("Amount of snacks per day: "+snackperDay+"<br>")
// document.write("You will need "+(snackperDay*totalDaysIn65year)+favouriteSnack+" to last you until the ripe old age of 65")


// JAVASCRIPT Assignment # 6
//Maths Expressions

// Question #1
// var a=10;
// document.write("Result:"+"<br>"+"<br>"+"<br>")
// document.write("The value of a is "+ a+"<br>"+"<br>")
// document.write("<hr>")
// document.write("<br>"+"The value of ++a is "+ ++a +"<br>")
// document.write("Now the value of a is "+ a +"<br>"+"<br>")
// document.write("The value of a++ is "+a+++"<br>")
// document.write("Now the value of a is "+ a +"<br>"+"<br>")
// document.write("<br>"+"The value of --a is "+ --a +"<br>")
// document.write("Now the value of a is "+ a +"<br>"+"<br>")
// document.write("<br>"+"The value of a-- is "+ a-- +"<br>")
// document.write("Now the value of a is "+ a )

// Question #2
// var a = 2, b = 1;
// document.write("a is"+a+"<br>")
// document.write("b is"+b+"<br>")
// var result = --a - --b + ++b + b--;
// --a;1
// --a - --b;1-0=1
// --a - --b + ++b;1-0=1+1=2
// --a - --b + ++b + b--;1-0=1+1=2+1=3
// document.write("Result is "+result);

// Question #3
// var a=prompt("Write your name:")
// alert("Welcom "+a)

// Question #5
// var a=prompt("Which numbers table you wanna see? ","0")
// if(a>0){
//     for (var i = 1; i <=10; i++){
//         document.write(a+ " x" +i +" = " +a*i +"<br>");
//     }
// }else{
//     for (var i = 1; i <=10; i++){
//         document.write(5+ " x" +i +" = " +5*i +"<br>");
//     }
// }

// Question #6
// var subject1=prompt("Enter first subject name")
// var subject2=prompt("Enter second subject name")
// var subject3=prompt("Enter third subject name")
// var totalMarksFor1subject=100;
// var subject1Marks=prompt("Enter "+subject1 +" subject marks")
// var subject2Marks=prompt("Enter "+subject2 +" subject marks")
// var subject3Marks=prompt("Enter "+subject3 +" subject marks")
// document.write("<h2>Subject</h2>"+"<br>"+subject1+"<br>"+subject2+"<br>"+subject3);
// document.write("<h2>Total Marks</h2>"+"<br>"+totalMarksFor1subject+"<br>"+totalMarksFor1subject+"<br>"+totalMarksFor1subject);
// document.write("<h2>Obtained Marks</h2>"+"<br>"+subject1Marks+"<br>"+subject2Marks+"<br>"+subject3Marks);
// document.write("<h2>Percentage</h2>"+"<br>"+(subject1Marks/totalMarksFor1subject)*100+"%"+"<br>"+(subject2Marks/totalMarksFor1subject)*100+"%"+"<br>"+(subject3Marks/totalMarksFor1subject)*100+"%"+);
// document.write("Total Marks: "+totalMarksFor1subject*3+"Obatined Marks: "+(subject1Marks+subject2Marks+subject3Marks)+"Total Percentage"+((subject1Marks+subject2Marks+subject3Marks)/(totalMarksFor1subject*3))*100)