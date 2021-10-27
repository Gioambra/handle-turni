import {format} from "date-fns";
const turni = () => {
    const getTodayWithNoTime = () => {
        return format(new Date(), "yyyy-MM-dd");
    };
    // get today and go away of 7 days
    console.log(getTodayWithNoTime());
    return <div>turni!!!</div>;
};

export default turni;
