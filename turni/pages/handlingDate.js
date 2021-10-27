import {format, addDays, parseISO} from "date-fns";
import {it} from "date-fns/locale";
const getTodayWithNoTime = () => {
    console.log(format(new Date(), "dd-MM-yyyy"));
    return format(new Date(), "dd-MM-yyyy");
};

//TODO formattare in data europea e automaticamente capire giorno me se anno
const getNextDay = (from) => {
    console.log(addDays(new Date(2021, 10, 27), 1));
    return addDays(new Date(2021, 10, 27), 1);
};

export {getTodayWithNoTime, getNextDay};
