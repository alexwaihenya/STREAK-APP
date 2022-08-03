import { taskDetails } from "../interfaces/taskDetails";
export class CalculateStreakDays{

    constructor(){}

    public static calculateNoOfDays(start: string){
        let currentDate: number = new Date().getTime();

        let dayAdded: number = new Date(start).getTime()
        let days: number = Math.floor((currentDate)-(dayAdded) / (1000*3600*24));

        if(days <=0){
            return days;
        }
        return days

    }

   
}