// let text = "Hello";
// while (text != "q") {
//   document.write(text + "<br />");
//   text = prompt('Enter a text to print. Enter "q" to quit.');
// }

// var i = 1;
// while (i != 10) {
//   var num = 5 * i;
//   document.write("truoc lenh " + i);
//   document.write("</br>");
//   document.write("5 x " + i + "=" + num);
//   document.write("<br>");
//   i++;
//   document.write("sau lenh " + i);
//   document.write("</br>");
// }

// let i = 1;
// for (; i <= 10; ) {
//   var product = 5 * i;
//   document.write("5 x " + i + "=" + product);
//   document.write("<br>");
//   i++;
// }

// let sum = 0;
// let number;
// do {
//   number = parseInt(prompt("Enter a number"));
//   sum += number;
// } while (number != 0);
// document.write("The sum is: " + sum);

// let sum = 0;
// let number;
// while (number != 0) {
//   number = parseInt(prompt("Enter a number"));
//   sum += number;
// }
// document.write("The sum is: " + sum);

// var text = "";
// for (let i = 0; i < 5; i++) {
//   if (i == 3) {
//     continue;
//   }
//   text += "The number is " + i + "<br>";
// }
// document.getElementById("result").innerHTML = text;

// let text = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 10; j++) {
//     text += "*";
//   }
//   text += "<br>";
// }
// document.getElementById(" ").innerHTML = text;
// let result;
// for (let i = 1; i <= 9; i++) {
//   result += "<tr>";
//   for (let j = 2; j <= 9; j++) {
//     result += "<td>" + j + " x " + i + "=" + j * i + "</td>";
//   }
//   result += "</tr>";
// }
// document.getElementById("tableDemo").innerHTML = result;

// c2 : sử dụng tempalte string

let result2 = "";
for (let i = 1; i <= 9; i++) {
  result2 += "<tr>";
  for (let j = 2; j <= 9; j++) {
    result2 += `<td> ${j}  x ${i} = ${j * i} </td>`;
  }
  result2 += "</tr>";
}
document.getElementById("tableDemo").innerHTML = result2;
