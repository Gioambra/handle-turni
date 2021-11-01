import {format, addDays} from "date-fns";
const getTodayWithNoTime = () => {
    console.log(format(new Date(), "dd-MM-yyyy"));
    return format(new Date(), "dd-MM-yyyy");
};

//TODO formattare in data europea e automaticamente capire giorno me se anno

// input ->> data di oggi
// output->> data di domani
const getNextDay = (from) => {
    const dateFrom = from.split('-');
    console.log(format(addDays(new Date(dateFrom[2], (dateFrom[1] - 1), dateFrom[0]), 1),'dd-MM-yyyy'));
    // aano -mese -giorno
    return format(addDays(new Date(dateFrom[2], (dateFrom[1] - 1), dateFrom[0]), 1),'dd-MM-yyyy');
};

// input ->>data di oggi 
// output->> tutta la settimana corrente
const getCurrentWeek = (from) =>
{
   let tomorrow = getNextDay(from);
    let currentWeek = [];
    for(var index = 0; index<7; index++)
    {
        currentWeek.push(tomorrow);
        tomorrow = getNextDay(tomorrow)
    }
    console.log(currentWeek);
    return currentWeek
}
export {getTodayWithNoTime, getNextDay, getCurrentWeek};
