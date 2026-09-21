let n = 0;

const num = document.getElementById("num");
const increase = document.getElementById("increase");

increase.addEventListener("click", function (event) {
    n = n + 1;
    num.innerHTML = n;
});

submit.addEventListener("click", (event) => {
    fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            value: n
        })
    })

    n = 0;
    num.innerHTML = n;
});
