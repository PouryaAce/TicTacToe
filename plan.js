//////////////////  PROJECT 1 \\\\\\\\\\\\\\\\\\\\\
//   P           L            A            N     \\

//1. need to create html file and use semantic tags
// create main and section with 9 divs in it

//.give each a width and heaight and border so we can see them

//2.give the section a display of grid
//section {
//display:grid , grid-template-columns , ...
//}

//3.target each box of grid individually and when the box is clicked

//need to create a function to target all boxes within parent element

// function(event)

//4.when its clicked in an empty appear X in the box

//function clickXMaker(event)
//   var secClicked = event.target;
//   if (secClicked.tagName === "SECTION") {
//     secClicked.textcontent = "X";
//   }
// }
// var container = document.querySelector(".container");
// container.addEventListener("click", clickXMaker );

//5.next time its clicked in an empty appear O in the box

//if textcontent of first click === "X"
//run function clickOMaker

//6.you can only use X or O one time on each round

//7.use clicks switch X and O

// need to difine player-1 = 'O'
// need to define player-2 = 'X'

//8.if we get 3 similar items in 3 rows and cross ways same player wins
// assign var winner =

//9.if we have winner add another semantic tag to change its textconent to
//`Winner is ${}
