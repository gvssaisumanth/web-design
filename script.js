var drinkName = "NA";
var social = [];
var size = "Small";
function validateDetails(object, type, nameType) {
  var email = /^[a-zA-Z0-9._%+-]+@northeastern+\.edu$/;
  var phone = /\d{3}-?\d{3}-\d{4}$/;
  var zip = /^([0-9]{5})$/;
  var name = "errorMsg" + nameType;
  switch (type) {
    case 1:
      if (!object.value.match(email)) {
        object.style.border = "2px solid red";
        document.getElementById("emailError").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("emailError").style.display = "none";
      }
      break;
    case 2:
      if (!object.value.match(phone)) {
        object.style.border = "2px solid red";
        document.getElementById("phoneError").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("phoneError").style.display = "none";
      }
      break;

    case 3:
      if (object.value.trim() == "") {
        object.style.border = "2px solid red";
        document.getElementById("streetAdd1Error").style.display = "block";
        //object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("streetAdd1Error").style.display = "none";
      }
      break;

    case 4:
      if (object.value.trim() == "") {
        object.style.border = "2px solid red";
        document.getElementById("cityError").style.display = "block";
        //object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("cityError").style.display = "none";
      }
      break;
    case 5:
      if (!object.value.match(zip)) {
        object.style.border = "2px solid red";
        document.getElementById("zipError").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("zipError").style.display = "none";
      }
      break;
    case 6:
      if (object.value.trim() == "") {
        object.style.border = "2px solid red";
        document.getElementById("stateError").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("stateError").style.display = "none";
      }
      break;

    case 7:
      if (object.value.trim() == "") {
        object.style.border = "2px solid red";
        document.getElementById("fnameError").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("fnameError").style.display = "none";
      }
      break;

    case 8:
      if (object.value.trim() == "") {
        object.style.border = "2px solid red";
        document.getElementById("lnameError").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("lnameError").style.display = "none";
      }
      break;
    case 9:
      if (object.value.trim() == "") {
        object.style.border = "2px solid red";
        document.getElementById("addError").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("addError").style.display = "none";
      }
      break;

    case 10:
      if (object.value.trim() == "") {
        object.style.border = "2px solid red";
        document.getElementById("commentsError").style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById("commentsError").style.display = "none";
      }
      break;
    case 11:
      if (social.length == 0) {
        object.style.border = "2px solid red";
        document.getElementById("socialError").style.display = "block";
      } else {
        object.style.border = "";
        document.getElementById("socialError").style.display = "none";
      }
      break;
    case 12:
      if (object.value == null || object.value == "") {
        object.style.border = "2px solid red";
        document.getElementById(name).style.display = "block";
        object.value = "";
      } else {
        object.style.border = "";
        document.getElementById(name).style.display = "none";
      }
  }
}

function confirmInput() {
  var btn = document.getElementsByName("title");
  var valid = false;
  var i = 0;
  while (!valid && i < btn.length) {
    if (btn[i].checked) valid = true;
    i++;
  }
  if (!valid) {
    document.getElementById("btnError").style.display = "none";
  } else {
    document.getElementById("btnError").style.display = "block";
  }
}

function dropDown() {
  var beverage = document.getElementById("beverages").value;
  var showdiv = document.getElementById("drinks");
  showdiv.style = "block";
  if (beverage == "Coke") {
    document.getElementById("check1").style.display = "block";
    document.getElementById("check2").style.display = "none";
    document.getElementById("check3").style.display = "none";
    document.getElementById("check4").style.display = "none";
    drinkName = beverage;
    console.log(drinkName);
  } else if (beverage == "Diet Coke") {
    document.getElementById("check1").style.display = "none";
    document.getElementById("check2").style.display = "block";
    document.getElementById("check3").style.display = "none";
    document.getElementById("check4").style.display = "none";
    drinkName = beverage;
    console.log(drinkName);
  } else if (beverage == "Coke Zero") {
    document.getElementById("check1").style.display = "none";
    document.getElementById("check2").style.display = "none";
    document.getElementById("check3").style.display = "block";
    document.getElementById("check4").style.display = "none";
    drinkName = beverage;
    console.log(drinkName);
  } else if (beverage == "Sprite") {
    document.getElementById("check1").style.display = "none";
    document.getElementById("check2").style.display = "none";
    document.getElementById("check3").style.display = "none";
    document.getElementById("check4").style.display = "block";
    drinkName = beverage;
    console.log(drinkName);
  } else if (beverage == "Fanta") {
    document.getElementById("check1").style.display = "none";
    document.getElementById("check2").style.display = "none";
    document.getElementById("check3").style.display = "none";
    document.getElementById("check4").style.display = "block";
    drinkName = beverage;
    console.log(drinkName);
  }
}

function onCheck(checkboxItems) {
  var addtextField = document.getElementById("addtextField");
  var addError = document.getElementById("addError");
  if (
    checkboxItems.checked &&
    ["Small", "Medium", "Large", "Extra Large"].includes(checkboxItems.id)
  ) {
    addtextField.style.display = "block";
    size = checkboxItems.id;
  } else {
    addtextField.style.display = "none";
    addError.style.display = "none";
    size = "Small";
  }

  if (
    checkboxItems.checked &&
    ["google", "facebook", "yelp"].includes(checkboxItems.id)
  ) {
    social.push(checkboxItems.id);
  } else {
    social = social.filter((e) => e != checkboxItems.id);
  }
}

function onSubmit() {
  var table = document.getElementById("mytable");

  var title = document.querySelector('input[name = "title"]:checked').value;
  var fname = document.getElementsByName("firstName")[0].value;
  var lname = document.getElementsByName("lastName")[0].value;
  var emailID = document.getElementsByName("emailId")[0].value;
  var phone = document.getElementsByName("phoneNumber")[0].value;
  var street1 = document.getElementsByName("streetAddress1")[0].value;
  var street2 = document.getElementsByName("streetAddress2")[0].value
    ? document.getElementsByName("streetAddress2")[0].value
    : "-";
  var state = document.getElementsByName("state")[0].value;
  var city = document.getElementsByName("city")[0].value;
  var zipcode = document.getElementsByName("zipcode")[0].value;

  var text = document.getElementsByName("text")[0].value;
  var socchnl = social.join(",");
  var drink =
    drinkName != "" || drinkName != null || drinkName != undefined
      ? drinkName
      : NA;
  //var addinfo = document.getElementById("addInfo").value;
  var addinfo = "-";

  if (
    title.trim() == "" ||
    fname.trim() == "" ||
    lname.trim() == "" ||
    emailID == "" ||
    phone == "" ||
    street1.trim() == "" ||
    zipcode.trim() == "" ||
    text.trim() == "" ||
    socchnl == "" ||
    drink == ""
  ) {
    alert("Please fill all the details");
  } else {
    table.style.display = "block";
    var row = table.insertRow(1);
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    var col4 = row.insertCell(3);
    var col5 = row.insertCell(4);
    var col6 = row.insertCell(5);
    var col7 = row.insertCell(6);
    var col8 = row.insertCell(7);
    var col9 = row.insertCell(8);
    var col10 = row.insertCell(9);
    var col11 = row.insertCell(10);
    var col12 = row.insertCell(11);
    var col13 = row.insertCell(12);
    var col14 = row.insertCell(13);
    var col15 = row.insertCell(14);

    col1.innerHTML = title;
    col2.innerHTML = fname;
    col3.innerHTML = lname;
    col4.innerHTML = emailID;
    col5.innerHTML = phone;
    col6.innerHTML = street1;
    col7.innerHTML = street2;
    col8.innerHTML = city;
    col9.innerHTML = state;
    col10.innerHTML = zipcode;
    col11.innerHTML = socchnl;
    col12.innerHTML = text;
    col13.innerHTML = drink;
    col14.innerHTML = size;
    col15.innerHTML = addinfo;
  }
  var frm = document.getElementsByName("feedback")[0];
  var showdiv = document.getElementById("drinks");
  showdiv.style.display = "none";
  var addtextField = document.getElementById("addtextField");
  addtextField.style.display = "none";
  frm.reset();
}
