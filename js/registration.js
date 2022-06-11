var userName;
var phoneNo;
var password;
var email;
function addUser(e) {

  console.log("Hello"+e)
  e.preventDefault();
  email =document.getElementById("email").value;
  userName = document.getElementById("userName").value;
  phoneNo = document.getElementById("phoneNo").value;
  password = document.getElementById("password").value;

 
  console.log({ userName, phoneNo, password });

  axios
    .post("http://localhost:9000/addUser", {
      userName: userName,
      email:email,
      mobileNo: phoneNo,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
