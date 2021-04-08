/*-------problem 1--------------------*/

//document.getElementById("para-text").style.backgroundColor = "red";


document.getElementById("para-text").style.backgroundColor = "lightblue";


/*------------------------problem2---------------------*/

let showText = false;       // To create a toggle action onclick
function linkLocation() {
    showText = !showText
    let x = document.getElementById("para-text2").href;
    if (showText) {
        document.getElementById("location").textContent = x;
    } else {
        document.getElementById("location").textContent = '';
    }
}

/*----------------------problem 3-------------------*/


// function addRow() {

//     //get input value
//     var fname = document.getElementById('fname').value;
//     var lname = document.getElementById('lname').value;
//     //get html table [0] is first table
//     var table = document.getElementsByTagName('table')[0];
//     //add cells to the new row
//     var newRow = table.insertRow(table.length);
//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     // add value to cells
//     cell1.innerHTML = fname;
//     cell2.innerHTML = lname;


// }





/*-----------------2nd attempt to create row function--*/


var rIndex,
    table = document.getElementById("table");
//     // get the table by ID
//     // create a new row and cells
//     // get value from input Text
//     // set the values into row cells's

function addRow() {


    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value;

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    //call to function t set the event to the new cell
    selectedRowToInput();

}

function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            //get the selected row index
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
        };
    }
}

selectedRowToInput();

function editHtmlTableSelectedRow() {
    var fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value;

    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = lname;

}

function removeSelectedRow() {
    table.deleteRow(rIndex);
    // to specify which input
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";

}


/*<----------------Question 4 create a list to loop through with index----------------*/

function showDropdownCount() {
    const dropdownParagraph = document.getElementById('dropdownCount');
    const dropdownOptions = document.getElementById('dropdownOptions');
    dropdownParagraph.textContent = dropdownOptions.options.length;
}

showDropdownCount();

