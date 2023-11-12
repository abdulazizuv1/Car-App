const cards = document.querySelector(".cards");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const input5 = document.querySelector(".input5");
const form = document.querySelector("form");
const text = document.querySelector("h1")
const card = document.querySelector(".card")

var students = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : []

var num = 0

const cardData = (data) => {
  if (data.length == "") {
    cards.innerHTML = `<h1 class="text">Hozircha Avtomobil yo'q</h1>`
  } else {
    cards.innerHTML = ""
    data.forEach((item) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
      <div class="card">
        <img src="${item.img}" alt="">
        <div class="name">
            <h2>${item.name}</h2>
            <i onclick="deleteCard(${item.id})" class="fa-solid fa-trash"></i>
        </div>
        <p>Speed: ${item.speed} km/s</p>
        <p>Price: ${item.price}$</p>
        <p>Color: ${item.color} <span style="display: inline-block; width: 20px; height: 20px; background: ${item.color};" ></span></p>
        <div class="links">
            <a href="#">more imgs</a>
            <a href="#">Another link</a>
        </div>
      `;
      cards.appendChild(cardElement);
    });
  }
};

cardData(students)

form.addEventListener("submit", (e) => {
  e.preventDefault()

  num++
  const data = {
    name: input1.value,
    speed: input2.value,
    price: input3.value,
    img: input4.value,
    color: input5.value,
    id: num
  };

  var dataInfo = JSON.parse(localStorage.getItem("students")) ? JSON.parse(localStorage.getItem("students")) : []
  dataInfo.push(data)
  localStorage.setItem("students", JSON.stringify(dataInfo))
  cardData(JSON.parse(localStorage.getItem("students")))

  input1.value = ""
  input2.value = ""
  input3.value = ""
  input4.value = ""
  input5.value = ""
});

const deleteCard = (id) => {
  var dataInfo = JSON.parse(localStorage.getItem("students")) ? JSON.parse(localStorage.getItem("students")) : []
  dataInfo = dataInfo.filter((item) => {
    return item.id != id
  })
  localStorage.setItem("students", JSON.stringify(dataInfo))
  cardData(dataInfo)
}
