var jinput;
function datefunc()
{
    var jh = document.getElementById('one');
     jinput = document.querySelectorAll("input,progress,.obj");
    var mydate = new Date();
    var h,m,s,time;
        h = mydate.getHours();
        m = mydate.getMinutes();
        s = mydate.getSeconds();
        // time = h+":"+m+":"+s;
        time = `Time  ${h} <span>:</span> ${m} <span>:</span> ${s}`;
    jh.innerHTML=time;
    //--------------------------------------------

    if(m>=34 && m<=36)
    {
      jinput[0].removeAttribute("disabled");  
    }
    else
    {
        jinput[0].setAttribute("disabled","disabled");
    }

    jinput[1].value=`${s}`;

    jinput[2].style.transform=`rotate(${s*6}deg)`;
    jinput[2].innerHTML = `${s}`;




    

}

datefunc();
setInterval("datefunc()",1000);




jinput[0].addEventListener("click",()=>{
        alert("welcome");
    });

// var mytext = `s dfjhsdjf jsidhfjis
//  dhfjihsjidfhjsdhfjshdjfhsjdkfh sj dfhjsddh fjkh 
//  sdjfjhjksdfhjkshdfjkhs 
//  jkfhjkshfjkshdfjkh
//   sjkhfjkshfdjkhsjkdf hjksdfhjk 
//    shdjkhsfhsjkdhfjk
//    sfkjhsdjkfhsjkdfhjkjsdhfjkshd`;
// console.log(mytext);
// var jp = document.getElementById('two').innerHTML=mytext;