
let todoele = document.getElementById("taskinfo");
let tasklist = document.getElementById("tasklist");

document.getElementById("add").onclick = function () {
    if (todoele.value.length == 0) {
        alert("Enter a task details");
    } else {
        tasklist.innerHTML = tasklist.innerHTML + `    
        <div class="task"> 
         <span id="work">${todoele.value}</span>
          <button class="del">Delete</button>
        </div>`;

        let alltasks = document.querySelectorAll('.del');

        for (let i = 0; i < alltasks.length; i++) {
            alltasks[i].onclick = function () {
                this.parentElement.remove();
            }
        }

        // Add click event to the task span to mark as done
        let taskSpans = document.querySelectorAll('#work');
        for (let i = 0; i < taskSpans.length; i++) {
            taskSpans[i].onclick = function () {
                this.classList.toggle("completed"); // Toggle the "completed" class
            }
        }

        todoele.value = "";
    }
}