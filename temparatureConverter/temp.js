function myfunction(){
    /* swapping the buttons*/ 
    var x = document.getElementById("press1");
    if  (x.value==="°C->°F"){
        x.value = "°F->°C";
    }
    else {
        x.value="°C->°F"
    }
    var y = document.getElementById("press2");
    if  (y.value==="°C->°K"){
        y.value = "°K->°C";
    }
    else {
        y.value="°C->°K"
    }
}
// function ctof(){
//     var a = document.getElementById("press1")
//     var b = document.getElementById("result")
//     if (a.value === "°C->°F"){
//         b.value=(b.value*(9/5)+32);
//     }
// }
// function ftoc(){
//     var c = document.getElementById("press2")
//     var d = document.getElementById("result")
//     if (c.value === "°C->°K"){
//         d.value=(d.value*1)+273.15;
//     }
// }

function swapping1(){
    var e = document.getElementById("press1");
    var b = document.getElementById("result");
    if  (e.value==="°C->°F"){/*celsius to farenheit*/ 
            b.value=(b.value*(9/5)+32);
    }
    else if (e.value==="°F->°C"){/*farenheit to celsius*/
                b.value=(b.value-32)*(5/9);
    }
}

function swapping2(){
    var f = document.getElementById("press2");
    var g = document.getElementById("result");
    if (f.value==="°C->°K"){//celsius to kelvin
        res =parseInt(g.value)+(273.15);
        
        g.value="";
        g.value=res;
    }
    // g.value="";
    // g.value=res;
    else if (f.value==="°K->°C"){//kelvin to celsius
        g.value = (g.value-(273.15));
    }
}