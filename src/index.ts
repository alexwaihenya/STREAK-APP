import { taskDetails } from "./interfaces/taskDetails";
import { CalculateStreakDays } from "./Classes/CalculateStreakDays";


const container = document.querySelector(".container") as HTMLDivElement;
container.style.display = "flex";
const container2 = document.querySelector(".container2") as HTMLDivElement;
container2.style.display = "none";
const addbtn = document.querySelector(".add") as HTMLDivElement;
const closebtn = document.querySelector(".close") as HTMLDivElement;


const streakList = document.querySelector('.streakList')
const availablestreaks = document.querySelector('.availablestreaks')
const titleText = document.createElement('p');

if(streakList.hasChildNodes()){
  titleText.textContent = "You Don't have any Activity!!!"
  titleText.style.fontStyle="italic"
  titleText.style.textAlign="center"
  titleText.style.marginTop = '16px';
}
availablestreaks.appendChild(titleText)





addbtn.addEventListener("click", () => {
  if (container.style.display === "flex") {
    container.style.display = "none";
    container2.style.display = "flex";
  } else {
    container.style.display === "flex";
    container2.style.display = "none";
  }
});
closebtn.addEventListener("click", () => {
  if (container2.style.display === "flex") {
    container2.style.display = "none";
    container.style.display = "flex";
  } else {
    container2.style.display === "flex";
    container.style.display = "none";
  }
});



// Form Inputs

export const formInputs = document.querySelector(".form1") as HTMLFormElement;
export const title = document.querySelector("#title") as HTMLInputElement;
export const image = document.querySelector("#imageUrl") as HTMLInputElement;
export const start = document.querySelector("#dueDate") as HTMLInputElement;

// form validation

formInputs.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskStreak = title.value !=="" && image.value !=="" && start.value !=="";
  if (!taskStreak) {
    const emptyFields = document.getElementById("alertUser");
    emptyFields.textContent = "Please fill in all fields";
    emptyFields.style.color = "red";
    
     setTimeout(()=>{
      emptyFields.textContent = ""

    },5000);
  } 
  else {
    task.pushTaskToDo();
    resetStreak();
    displayStreak();
    
  }
});
// Reset form
function resetStreak() {
  title.value = "";
  image.value = "";
  start.value = "";
}

//Tasks class

 class StreakTask {
  private taskToDo: taskDetails[] = [];

  get TaskToDoArray() {
    return this.taskToDo;
  }
  pushTaskToDo() {
    const newStreak: taskDetails = {
      taskTitle: title.value as string,
      taskImage: image.value as string,
      taskStart: start.value as string,
    };
    this.taskToDo.push(newStreak);
    console.debug(newStreak);
  }
}
  const task = new StreakTask();
  // task.pushTaskToDo()


// Display Streak

function displayStreak() {
  const streakItem = document.querySelector(".streakList");
  
  while (streakItem.hasChildNodes()) {
    streakItem.removeChild(streakItem.firstChild);
  }
  
  const arrayReach = task.TaskToDoArray;

  arrayReach.forEach(({ taskTitle, taskImage, taskStart }, index: number) => {
    const titlePop = document.createElement("p");
    titlePop.textContent = taskTitle;
    titlePop.style.padding = '2px';

    const imagePop = document.createElement("img");
    imagePop.src = taskImage;
    imagePop.style.height = '80px'
    imagePop.style.width = '80px'
    imagePop.style.justifyContent = 'center'


    const startPop = document.createElement("p");
    startPop.textContent = taskStart;
    startPop.style.padding = '2px';


    const displayDiv = document.createElement("div");
    displayDiv.addEventListener('click',()=>{
      
        streakPop.style.visibility="visible"
     
        streakPopUp(index)
    })
    
    displayDiv.appendChild(imagePop);
    displayDiv.appendChild(titlePop);
    displayDiv.appendChild(startPop);

    streakItem.appendChild(displayDiv);

    if (streakList.hasChildNodes()){
            
      while (availablestreaks.hasChildNodes()) {
          availablestreaks.removeChild(availablestreaks.firstChild);
          }
      titleText.textContent="Activities";
      titleText.style.marginTop = '8px';
    }
    availablestreaks.appendChild(titleText);  
  });


  const streakPop = document.querySelector(".streakpop") as HTMLDivElement;


// pop task
  

  function streakPopUp(index : number){

    const streakPop = document.querySelector(".streakpop") as HTMLDivElement;

    while(streakPop.hasChildNodes()){
      streakPop.removeChild(streakPop.firstChild)
    }

    const arrayReach = task.TaskToDoArray;
    let taskpop = arrayReach[index]
    
      const titleP2 = document.createElement("p");
      titleP2.textContent = taskpop.taskTitle;
      titleP2.style.padding = '4px';

  
      const imageP2 = document.createElement("img");
      imageP2.src = taskpop.taskImage;
      imageP2.style.height = '100px'
      imageP2.style.width = '100px'
      
      const startP2 = document.createElement("p");
      startP2.textContent = taskpop.taskStart;
      startP2.style.padding = '4px';

 //streak days calculation======================================
      const streakTime = document.createElement('p');

     
      const now = new Date();
      const datethen= new Date(taskpop.taskStart);
      const difference = now.getTime()-(Math.floor(datethen.getTime()));
      const theDays = (difference/(1000*60*60*24))

      function roundNumber(num:number, decimal_digit:number) {
          let powerOften = Math.pow( 10, decimal_digit );
          let result = Math.round( num * powerOften ) / powerOften;
          streakTime.textContent = (`${result} day(s)`)
       }
      roundNumber(theDays,1 )

      // const streakDays = document.createElement('p');
      // streakDays.textContent = CalculateStreakDays.calculateNoOfDays(`${start}`) 
      streakTime.style.padding = '4px';
      

      const closeBtn = document.createElement('button');
      closeBtn.textContent = 'Close';
      closeBtn.style.background = 'red';
      closeBtn.style.padding = '8px';
      closeBtn.style.color = 'white'
      closeBtn.style.marginRight = '16px'
      closeBtn.style.border = 'none';


      closeBtn.addEventListener('click',()=>{
        streakPop.style.visibility="hidden"
        
      
      })

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete'
      deleteBtn.style.background = 'grey';
      deleteBtn.style.padding = '8px';
      deleteBtn.style.color = 'white';
      deleteBtn.style.border = 'none';

      deleteBtn.addEventListener('click',()=>{
        
      task.TaskToDoArray.splice(index,1);
      displayStreak()
      streakPop.removeChild(displayPopUp)
      streakPop.style.visibility = "hidden"
    

      })

    
  
      const displayPopUp = document.createElement("div");
           
      
      displayPopUp.appendChild(imageP2);
      displayPopUp.appendChild(startP2);
      displayPopUp.appendChild(titleP2);
      displayPopUp.appendChild(streakTime);
      displayPopUp.appendChild(closeBtn);
      displayPopUp.appendChild(deleteBtn);
      

      
      streakPop.appendChild(displayPopUp);
      
      
      
 
  }
  
}
