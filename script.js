const container = document.getElementById("container");

const btns = container.querySelectorAll(".btn-primary");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (event) {
    event.preventDefault();
    btns[i].setAttribute("disabled", true);
    const parent = container.children[i];

    const taskAdd = parent.children[1].innerText;

    alert("Board updated Successfully");
    const task = document.getElementById("task").innerText;
    const taskNumber = parseInt(task);
    const checkbox = document.getElementById("checkbok").innerText;
    const checkboxNumber = parseInt(checkbox);
    const newTask = taskNumber - 1;
    document.getElementById("task").innerText = newTask;
    const newCheckbox = checkboxNumber + 1;
    document.getElementById("checkbok").innerText = newCheckbox;
    const history = document.getElementById("history");
    const time = new Date().toLocaleTimeString();
    const p = document.createElement("p");

    p.innerHTML = `<p class="bg-[#e5e7eb] rounded-lg p-4"> You have Complete the ${taskAdd} at ${time} </p> <br>  `;
    history.appendChild(p);
    // clear  history delete
    const historyBtn = document.getElementById("history-btn");
    historyBtn.addEventListener("click", function (event) {
      event.preventDefault();
      history.innerHTML = "";
    });
    // after task completed alert massage
    const taskComplete = taskNumber - 1;

    if (taskComplete === 0) {
      alert("congrats!!! you have completed all the current task.");
    }
  });
}
//  today date

document.getElementById("today").addEventListener("click", function () {
  const dateElement = document.getElementById("today");
  const date = new Date();
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  console.log("first");
  const formattedDate = date
    .toLocaleDateString("en-US", options)
    .replaceAll(",", "");
  dateElement.innerText = formattedDate;
});

//them RGB color
document.getElementById("theme").addEventListener("click", function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = rgbColor;
});
