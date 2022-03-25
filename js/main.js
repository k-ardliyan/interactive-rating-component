document.getElementById('submit').onclick = function() {
    var rating = document.querySelector("input[name=rating]:checked");
    var rate = document.getElementById("rate");
    var card1 = document.getElementsByClassName("card-body")[0].style;
    var card2 = document.getElementsByClassName("card-body thanks")[0].style;
    if (rating) {
        rate.innerHTML = rating.value;
        card1.display = "none";
        card2.display = "flex";
    } else {
        alert("Please select a rating");
    }
}