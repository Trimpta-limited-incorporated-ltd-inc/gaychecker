straigtlist = ["trimpta", "august", "robiot", "shab", "hsab", ]

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


}