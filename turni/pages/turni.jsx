import {getTodayWithNoTime, getNextDay, getCurrentWeek} from "./handlingDate";
const turni = () => {
    // get today and go away of 7 days
    const today = getTodayWithNoTime();
    //console.log(getNextDay(today));

    console.log(getCurrentWeek(today));
    // get 7 days from today
    // creare una funziona che mi dia le prossime 7 date a partire da oggi
    return <div>{today}</div>;
};

export default turni;
