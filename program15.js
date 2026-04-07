
var jinput,jopt;
var mydata= [10,50,70];
function loadobject()
{
    jinput = document.getElementById('myinput');
    jopt = document.querySelectorAll('select,div');
    console.log(jopt);
    updatedom()
}

 loadobject();

 function updatedom()
 {
        jopt[1].innerHTML = `Total Count (${mydata.length}) : ${mydata}`;
 }
 updatedom();


function adddata()
{
    if(jopt[0].value=="left")
    {
        mydata.unshift(jinput.value);
    }
    else if(jopt[0].value=="right")
    {
        mydata.push(jinput.value);
    }
    else
    {
        alert("please select direction to add data");
    }
    console.log(mydata);
    updatedom();

    // mydata.push(jinput.value);
    // mydata.unshift(jinput.value);
    // console.log(mydata);

}



function removedata()
{
    if(jopt[0].value=="left")
    {
        mydata.shift()
    }
    else if(jopt[0].value=="right")
    {
        mydata.pop()
    }
    else
    {
        alert("please select direction to remove data");
    }
    console.log(mydata);
    updatedom();

}