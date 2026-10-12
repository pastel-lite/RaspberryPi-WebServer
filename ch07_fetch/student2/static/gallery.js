// 서버 대신 쓸 가짜 데이터
const fakePhotos = [
    { title: "사진 1", img: "https://picsum.photos/seed/1/600" },
    { title: "사진 2", img: "https://picsum.photos/seed/2/600" },
    { title: "사진 3", img: "https://picsum.photos/seed/3/600" }
];

const gallery = document.getElementById("gallery");
const moreBtn = document.getElementById("more");

// 사진 목록을 받아 화면에 붙임
function showPhotos(photos) {
    let html = "";
    photos.forEach(photo => {
	    html+=`<div class="col-4 mb-3">
    <img src="${photo.img}" class="img-fluid">
    <p>${photo.title}</p>
</div>`;
    })
    gallery.insertAdjacentHTML("beforeend", html);
}

let page = 0;

function loadPhotos() {
    page = page + 1;
    // ✏️ 1. fetch 로 "/api/photos?page=" + page 를 요청 (method 를 안 적으면 GET)
    fetch("/api/photos?page="+page)
        .then(response => {
	    if(!response.ok) throw new Error("HTTP error: "+ response.status);
            return response.json();
	}).then(photos => {
	    showPhotos(photos);
	}).catch(error => {
	    alert("사진을 불러오지 못함");
	})
    // ✏️ 2. response.ok 가 아니면 throw 로 오류를 넘기고, 맞으면 response.json() 으로 바꿈
    // ✏️ 3. 바뀐 photos 를 showPhotos 로 화면에 붙임
    // ✏️ 4. 실패하면 alert("사진을 불러오지 못함")
}

moreBtn.addEventListener("click", loadPhotos);   // 더 보기를 누르면 실행
loadPhotos();                                    // 처음 열었을 때도 한 번 실행
