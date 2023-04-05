let arrayData = [
  {
    name: "Karthik",
    age: 23,
    password: "12345678",
  },
  {
    name: "Vineeth",
    age: 23,
    password: "qwerty",
  },
  {
    name: "Srilu",
    age: 13,
    password: "asdffdsa",
  },
];

// Possibilities
// 1. User submits with null values without entering data in text fields
// 2. check the data types of user name and password
// 3. User enters invalid data

function validate() {
  let id = document.getElementById("loginId").value;
  let password = document.getElementById("password").value;
  flag = false;

  if (id == "" && password == "") {
    alert("enter the login details");
  } 
  else {
    for (let i = 0; i < arrayData.length; i++) {
      if (id == arrayData[i].name && password == arrayData[i].password) {
        flag = true;
        break
      }
    }
    if (flag) {
      alert("your login details has been saved");
      // return
    } else {
      alert("enter the correct details");
      // return
    }
  }
  // console.log(id);
  // console.log(password)
}
