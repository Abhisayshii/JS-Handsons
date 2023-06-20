const flexButton = document.getElementById("flex-button");

function changeDrxn() {
    let box = document.getElementsByTagName("div")[1];
    console.log(box)
    box.style.flexDirection = "column";
};

function timer() {
  const time = new Date();
  const hr = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  console.log(hr, min, sec);
  document.getElementById("clock").innerText = hr + ":" + min + ":" + sec;
}
setInterval(timer, 1000);


let res = document.getElementsByTagName("p")[0];
console.log(res)
res.innerText = "Hello"

function btnPressed() {
    res.innerText = "Hello world"
}
const header = document.getElementById("heading").style.color="red";