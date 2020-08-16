function validate() {
    var username = document.querySelector('#Box_1').value;
    console.log(username);
    var password = document.querySelector('#Box_2').value;
    console.log(password);



    if (username == " ") {
        alert("Username Invalid It cannot be empty");
    }
    else if (password == " ") {
        alert("Password Invalid It cannot be empty");
    }





    // document.querySelector("#post").textContent = " enter username and password";
    document.querySelector("#post").textContent = "shubham" + " " + "pass";
    document.querySelector('#Box_1').value = " ";
    document.querySelector('#Box_2').value = " ";


    // var newelement = document.createElement('div');
    // // var username = document.querySelector('#Box_1').value
    // // document.querySelector('#Box_2').value;

    // newelement.textContent = username;
    // document.querySelector("#post_1").appendChild(newelement);



}

// function demo() {

//     let a = document.querySelector('#Box_1').value;
//     let b = document.querySelector('#Box_2').value;
//     let c = document.querySelector('#Box_1').value;
//     let d = document.querySelector('#Box_2').value;
//     if (c == " ") {
//         alert("enter username");
//     }
//     else if (d == " ") {
//         alert("enter password");
//     }
//     // document.querySelector('#Box_1').value = " ";
//     // document.querySelector('#Box_2').value = " ";

//     let x = document.querySelector("#post_1").cloneNode(true);
//     x.removeAttribute("id");
//     x.children[0].innerHTML = a;
//     x.children[0].innerHTML = b;
//     let cmt = document.querySelector(x.cmt.firstChild);

// }