import {getTodayWithNoTime, getNextDay, getCurrentWeek} from "./handlingDate";
const turni = () => {
    const today = getTodayWithNoTime();

    //console.log(getCurrentWeek(today));

    //TODO gestire visulalizzazione prossimi 7 giorni e creare docker file e database postgres?
    return <div>{getCurrentWeek(today)}</div>;
};

export default turni;
