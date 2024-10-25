/* 
* Author: Bella Duarte
* Date Created: 24 October 2024
* License: Public Domain
*/ 

function nameSortingFunction() {
    var userName = window.prompt("Hi! Please tell me your name so I can fix it.");
    console.log("userName = ", userName);

    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort = ", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);

    return nameSorted;
}


// output
document.writeln("I sorted your name. Here: ");
document.write(nameSortingFunction() + "</br>");
