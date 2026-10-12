const led = document.getElementById("led");
const on = document.getElementById("on");
const off = document.getElementById("off");

fetch("/get_last")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.text(); // 본문 읽기 (문자열 "0" 또는 "1")
  })
  .then(data => {
    const status = parseInt(data.trim(), 10);

    if (status === 1) {
      led.src = "/static/on.png";
    } else {
      led.src = "/static/off.png";
    }
  })
  .catch(error => {
    alert(error);
  });


on.addEventListener("click", () => {
	fetch("/on", {method:"POST"}).then(response => {
		if(!response.ok){
			throw new Error("HTTP error "+ response.status)
		}
		led.src = "/static/on.png";
	}).catch(error => {
		alert(error);
	});
});

off.addEventListener("click", () => {
	fetch("/off", {method:"POST"}).then(response => {
                if(!response.ok){
                        throw new Error("HTTP error "+ response.status)
                }
                led.src = "/static/off.png";
        }).catch(error => {
                alert(error);
        });	
})
