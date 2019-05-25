document.getElementById("Submit1").onclick = function() { Input() };
document.getElementById("Submit2").onclick = function() { AddTable() };
document.getElementById("Remove").onclick = function() { DelTable() };
var cal = 0;
var pro = 0;
var fat = 0;
var ConCal = 0;
var ConPro = 0;
var ConFat = 0;
var Greeting = document.querySelector('h3');

if (!localStorage.getItem('fname')) {} else {
    console.log("save")
    document.getElementById("FirstName").value = localStorage.getItem('fname');
    document.getElementById("LastName").value = localStorage.getItem('lname');
    document.getElementById("Age").value = localStorage.getItem('age');
    document.getElementById("Height").value = localStorage.getItem('height');
    document.getElementById("Weight").value = localStorage.getItem('weight');
}

/*Extracts input from FORM*/
function Input() {

    var fname = document.getElementById("FirstName").value;
    var lname = document.getElementById("LastName").value;
    var age = document.getElementById("Age").value;
    var weight = document.getElementById("Weight").value;
    var height = document.getElementById("Height").value;
    if (document.getElementById("Save").checked == true) {
        StoreLocal(fname, lname, age, height, weight);

    }
    /*Processes input to get required Calories,Protien & Fat*/
    Evaluation(fname, lname, age, height, weight);
    window.scrollBy(0, 1000 );
}

function Evaluation(fname, lname, age, height, weight) {
    console.log(fname);
    Greeting.textContent = "Welcome " + fname + " " + lname;
    cal = Math.round((864 - 9.72 * age + 1.14 * (14.2 * weight + 503 * height)));
    pro = Math.round(cal / 16);
    fat = Math.round(cal / 30);
    document.getElementById("o1").innerHTML = "NA/" + cal;
    document.getElementById("o2").innerHTML = "NA/" + pro;
    document.getElementById("o3").innerHTML = "NA/" + fat;
}
/*Stores data locally*/
function StoreLocal(fname, lname, age, height, weight) {
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('age', age);
    localStorage.setItem('height', height);
    localStorage.setItem('weight', weight);
}
/*Modifies table by adding rows*/
function AddTable() {
    var FoodN = document.getElementById("FoodName").value;
    var TCal = document.getElementById("CalorieAmt").value;
    var TPro = document.getElementById("ProtienAmt").value;
    var TFat = document.getElementById("FatAmt").value;

    ConCal += (+TCal);
    ConPro += (+TPro);
    ConFat += (+TFat);


    var table = document.getElementById("Table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = FoodN;
    cell2.innerHTML = TCal;
    cell3.innerHTML = TPro;
    cell4.innerHTML = TFat;

    document.getElementById("o1").innerHTML = ConCal + "/" + cal;
    document.getElementById("o2").innerHTML = ConPro + "/" + pro;
    document.getElementById("o3").innerHTML = ConFat + "/" + fat;

    if (ConCal > cal) {
        document.getElementById("WarningCal").innerHTML = "Warning Exceded Required Calorie Count";
        var Wcolor = document.getElementById("o1");
        Wcolor.style.color = 'red';

    }
    if (ConPro > pro) {
        document.getElementById("WarningPro").innerHTML = "Warning Exceded Required Protien Consumption";
        var Wcolor = document.getElementById("o2");
        Wcolor.style.color = 'red';


    }
    if (ConFat > fat) {
        document.getElementById("WarningFat").innerHTML = "Warning Exceded Required Fat Consumption";
        var Wcolor = document.getElementById("o3");
        Wcolor.style.color = 'red';

    }

    /*allows user to delete previous inputs*/
}

function DelTable() {
    var table = document.getElementById('Table');
    var Cells = table.rows.item(1).cells;

    var TCal = Cells.item(1).innerHTML;
    var TPro = Cells.item(2).innerHTML;
    var TFat = Cells.item(3).innerHTML;
    ConCal -= TCal;
    ConPro -= TPro;
    ConFat -= TFat;
    document.getElementById("Table").deleteRow(1);
    document.getElementById("o1").innerHTML = ConCal + "/" + cal;
    document.getElementById("o2").innerHTML = ConPro + "/" + pro;
    document.getElementById("o3").innerHTML = ConFat + "/" + fat;

    if (ConCal <= cal) {
        document.getElementById("WarningCal").innerHTML = " "
        var Wcolor = document.getElementById("o1");
        Wcolor.style.color = 'white';

    }
    if (ConPro <= pro) {
        document.getElementById("WarningPro").innerHTML = " "
        var Wcolor = document.getElementById("o2");
        Wcolor.style.color = 'white';


    }
    if (ConFat <= fat) {
        document.getElementById("WarningFat").innerHTML = " "
        var Wcolor = document.getElementById("o3");
        Wcolor.style.color = 'white';

    }

}