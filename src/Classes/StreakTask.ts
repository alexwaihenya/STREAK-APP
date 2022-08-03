import { taskDetails } from "../interfaces/taskDetails";
import { title } from "../index";
import { image } from "../index";
import { start } from "../index";

export class StreakTask {
  private taskToDo: taskDetails[] = [];

  get TaskToDoArray() {
    return this.taskToDo;
  }
  pushTaskToDo() {
    const newStreak: taskDetails = {
      taskTitle: title.value,
      taskImage: image.value,
      taskStart: start.value,
    };
    this.taskToDo.push(newStreak);
    console.debug(newStreak);
  }
}
