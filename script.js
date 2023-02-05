count = 1;
selectedRows = 0;
function addRecord() {
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  var lastStudent =
    table.lastElementChild.lastElementChild?.firstElementChild
      ?.nextElementSibling?.innerHTML || "Student 0";
  var latestIndex = lastStudent.split(" ")[1];
  var tdNode = document.createElement("tr");

  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML =
    '<input id="checkbox" type="checkbox" onclick="onCheckboxClick(this)"/><br/> <br/><img src="./down.png" onclick="showRecord(this)">';
  var trStudentCell = document.createElement("td");
  var trAdvisorCell = document.createElement("td");
  var trAward = document.createElement("td");
  var trsemester = document.createElement("td");
  var trtype = document.createElement("td");
  var trbudget = document.createElement("td");
  var trpercentage = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(latestIndex) + 1);
  trAdvisorCell.innerHTML = "Advisor " + (parseInt(latestIndex) + 1);
  trAward.innerHTML = "Approved";
  trsemester.innerHTML = "FALL";
  trtype.innerHTML = "TA";
  tdNode.appendChild(trCheckBoxCell);
  const budget = [9990, 9991, 7890, 7890, 5678, 9078];
  const randIndex = Math.floor(Math.random() * budget.length);
  trbudget.innerHTML = budget[randIndex];
  trpercentage.innerHTML = "100%";

  tdNode.appendChild(trCheckBoxCell);
  tdNode.appendChild(trStudentCell);
  tdNode.appendChild(trAdvisorCell);
  tdNode.appendChild(trAward);
  tdNode.appendChild(trsemester);
  tdNode.appendChild(trtype);
  tdNode.appendChild(trbudget);

  tdNode.appendChild(trpercentage);

  tbodyRef.appendChild(tdNode);
  alert("Student added successfully");
}

function onCheckboxClick(checkbox) {
  var rowSelect = checkbox.parentElement.parentElement;
  var tableRow =
    document.getElementById("myTable").firstElementChild.firstElementChild;
  if (checkbox.checked == true) {
    rowSelect.style.backgroundColor = "yellow";

    //Edit

    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editTd");
    editButton.innerHTML =
      '<button id="edit" type="button" onclick="editRow(this)">Edit </button>';
    rowSelect.appendChild(editButton);

    // deleting
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteTd");
    deleteButton.innerHTML =
      '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
    rowSelect.appendChild(deleteButton);
    selectedRows++;
    document.getElementById("award").disabled = false;
    if (tableRow.children.length === 8) {
      var treditRow = document.createElement("th");

      treditRow.innerHTML = "<th> Edit </th>";
      tableRow.appendChild(treditRow);

      var trdelRow = document.createElement("th");
      trdelRow.innerHTML = "<th> Delete </th>";
      tableRow.appendChild(trdelRow);
    }
    // tableheaderRow
  } else {
    rowSelect.style.backgroundColor = "#fff";
    selectedRows--;
    if (selectedRows == 0) {
      tableRow.deleteCell(9);
      tableRow.deleteCell(8);
      document.getElementById("award").disabled = true;
    }

    rowSelect.deleteCell(9); //removes the delete button
    rowSelect.deleteCell(8); //removes the edit button
  }
}

function deleteRow(rowObject) {
  var tr = rowObject.parentElement.parentElement; //tr reference

  if (tr.nextElementSibling && tr.nextElementSibling.id == "showRecord") {
    document.getElementById("myTable").deleteRow(tr.rowIndex + 1);
  }
  document.getElementById("myTable").deleteRow(tr.rowIndex);
  count--;
  selectedRows--;
  if (selectedRows == 0) {
    var tableRow =
      document.getElementById("myTable").firstElementChild.firstElementChild;
    document.getElementById("award").disabled = true;
    tableRow.deleteCell(9);
    tableRow.deleteCell(8);
  }
  alert("Row deleted successfully!");
}

function editRow() {
  window.prompt("defaultText");
}

function showRecord(cellObject) {
  var tr = cellObject.parentElement.parentElement;
  const getIndex = tr.rowIndex;
  var nextRow = tr.nextElementSibling;

  if (nextRow && nextRow.id == "showRecord") {
    document.getElementById("myTable").deleteRow(getIndex + 1);
  } else {
    const textToshow = `
    <div  style="text-align:center">
    Advisor:
    <ul>Award Details</ul>
    <ul>Summer 1-2014(TA)</ul>
    <ul>Budget Number: </ul>
    <ul>Tution Number: </ul>
    <ul>Comments: </ul>
    <ul>Award Status: </ul>
    </div>
     `;

    var rowInsert = document.getElementById("myTable").insertRow(getIndex + 1);
    rowInsert.setAttribute("id", "showRecord");
    rowInsert.innerHTML += textToshow;
  }
}
