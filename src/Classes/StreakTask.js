export class StreakTask {
    constructor() {
        this.taskToDo = [];
    }
    get TaskToDoArray() {
        return this.taskToDo;
    }
    pushTaskToDo() {
        const newStreak = {
            taskTitle: title.value,
            taskImage: image.value,
            taskStart: start.value,
        };
        this.taskToDo.push(newStreak);
        console.debug(newStreak);
    }
}
