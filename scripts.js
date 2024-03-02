straigtlist = ["trimpta", "august", "robiot", "shab", "hsab", "Demetrius Demarcus Bartholomew James The Third"]

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
