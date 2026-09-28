var n = 0;
var num = document.querySelector("#num");
var increase = document.querySelector("#increase");
var submit = document.querySelector("#submit");

increase.addEventListener("click", function () {
    n = n + 1;
    num.innerHTML = n;
});

submit.addEventListener("click", function () {
    fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            value: n
        })
    })
    .then(res => {
        if (res.ok) {
            n = 0;
            num.innerHTML = n;
            location.reload(); // 저장 완료 후 최신 DB 목록 반영
        }
    });
});
