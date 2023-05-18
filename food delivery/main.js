const data = new Array();


function onAddClicked() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;

    if (name && mail && phone && date) {
        const obj = {
            "name": name,
            "mail": mail,
            "phone": phone,
            "date": date
        }
        data.push(obj);
        
    } else {
        document.getElementById("msg").innerHTML = "Please Enter all details";
    }
}

function onViewClicked() {
    document.getElementById("out").innerHTML = "";
    for (let i=0;i<data.length;i++) {
        document.getElementById("out").innerHTML += (i+1+")<br>"+"Name :"+data[i].name+"<br>"+"Mail ID :"+data[i].mail+"<br>"+"Phone :"+data[i].phone+"<br>"+"Date :"+data[i].date+"<br><br>");
    }
}

function onUpdateClicked() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;

    var foundIndex=-1;

    for (let i=0;i<data.length;i++) {
        if (data[i].mail === mail) {
            foundIndex=i;
        }
    }

    if (foundIndex == -1) {
        document.getElementById("msg").innerHTML = "Mail Id not there..";

    }
    else {
        data[foundIndex].name = name;
        data[foundIndex].phone = phone;
        data[foundIndex].date = date;
    }
}

function onDeleteClicked() {
    var mail = document.getElementById("mail").value;
  
    var foundIndex=-1;

    for (let i=0;i<data.length;i++) {
        if (data[i].mail === mail) {
            foundIndex=i;
        }
    }

    if (foundIndex == -1) {
        document.getElementById("msg").innerHTML = "Not Found try again";

    }
    else {
        data.splice(foundIndex,1);
    }
}