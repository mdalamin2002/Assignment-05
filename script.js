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
    // p.classList.add("text-gray-600");
    p.innerHTML = `<p class="bg-[#e5e7eb] rounded-lg p-4"> You have Complete the ${taskAdd} at ${time} </p> <br>  `;
    history.appendChild(p);
    // clear  history delete
    const historyBtn = document.getElementById("history-btn");
    historyBtn.addEventListener("click", function (event) {
      event.preventDefault();
      history.innerHTML = "";
    });
  });
}

// const newDate = (new Date()).toString().split(' ')
//   console.log(newDate[2]+ );
