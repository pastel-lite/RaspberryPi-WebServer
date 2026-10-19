const angleInput = document.getElementById("angle");
const message = document.getElementById("message");
const button = document.getElementById("move");
  
button.addEventListener("click", async () => {
    const angle = angleInput.value;        // 입력칸의 값을 가져옴

    if(angle < 0 || angle > 180 || angle == ""){
        alert("각도가 올바르지 않습니다.");
        return;
    }
    const response = await fetch("/api/angle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },   // 본문이 JSON 이라고 알려줌
        body: JSON.stringify({ angle: angle })             // {angle: 90} 을 JSON 글자로 바꿔서 담음
    });
    const result = await response.json();
    try{
        if(!response.ok) throw new Error(result.message);
        message.textContent = angle + "도로 움직임";
    }catch (e){
        alert(e);
    }
});
