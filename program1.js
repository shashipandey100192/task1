function myform()
{
    // var user = document.getElementById('one').name;
    // var user = document.getElementById('one');
    // var user = document.getElementById("one");
    // var user = document.getElementsByClassName('form-group');            // all in document
    // var user = document.getElementsByClassName('form-group')[0].children[0].innerHTML;
    // var user = document.getElementsByTagName('input');

    // var user = document.querySelector("#one, .from-group, div");
     var user = document.querySelectorAll("#one, .from-group, div");

    console.log(user);
    console.log(typeof(user));
}