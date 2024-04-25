straigtlist = ["trimpta", "august", "robiot", "shab", "hsab", "demetrius demarcus bartholomew james the third", "intervinn","shreevardhan","shreevardhan t v", "t v shreevardhan"]

function testResults (form) {
    var name = form.inputbox.value;
    
    let results = document.getElementById("reslt");

    if (name != ""){
        if (straigtlist.includes(name.toLowerCase())) {
                results.textContent = name.toUpperCase() + " IS NOT GAY"
                }
        else {
                results.textContent = name.toUpperCase() + " IS GAY"
                }
    }
    else {
        results.textContent = "Please enter Username"
    }
    return false;
}


function enterHandler(e, form)  {
    if((e && e.keyCode == 13) || e == 0) {
      testResults(form)
    }
    return false;
 }