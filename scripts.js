straigtlist = ["trimpta", "august", "robiot", "shab", "hsab", "demetrius demarcus bartholomew james the third"]

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


}
