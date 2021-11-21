import {Box} from "@chakra-ui/react";
import {useEffect} from "react";
import {getTodayWithNoTime, getCurrentWeek, thisWeek} from "./handlingDate";
import Day from "./day";
//TODO on open these page fetch data from rest api
const TurniWrapper = () => {
    const today = getTodayWithNoTime();
    //TODO pass data to Day
    // to fetch useEffect! https://www.robinwieruch.de/react-hooks-fetch-data
    /*const getData = async () => {
        const response = await fetch("http://localhost:3001/getturns")
            .then((response) => response.json())
            .then((data) => console.log(data));
        return response;
    };
    */

    const insertDay = async () => {
        const days =  thisWeek();

        for(let index=0;index<days;index++)
        {

        const response = await fetch("http://localhost:3001/insertday", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        
        body: `{"id": "${days[index]}","user": "user to add","turni": "turno ore 15.00" }`
    ,}
);
    }

    };

    return (
        <Box m="5px" onClick={() => insertDay()}>
            <Day days={thisWeek()} />
        </Box>
    );
};

export default TurniWrapper;
