function checkAge(){
    const ageInput = document.getElementById("age-input").value;

    const age = Number(ageInput);

    let errorMessage = "";

    //my code here

    if (errorMessage === ""){
        document.getElementById("main-content").style.visibility = "visible";

        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;

        //my code here
    }
}