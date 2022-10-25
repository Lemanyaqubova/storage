const localBtn = document.querySelector(".form button");
const newTbody = document.querySelector("tbody");

localBtn.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let pasword = document.getElementById("pasword").value;
    localStorage.setItem("inf", username)
    localStorage.setItem("in", pasword)
    if (localStorage.getItem("inf")) {
        newTbody.innerHTML +=
            `<tr>
                                 <td>${localStorage.getItem("inf")}</td>
                                <td>${localStorage.getItem("in")}</td>

                                </tr>`
    }
    // getLocalData = localStorage.getItem("inf")

});
document.querySelector("Tbody").innerHTML += localStorage.getItem("inf")