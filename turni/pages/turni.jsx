import {Box} from "@chakra-ui/react";
import { useEffect } from "react";
import {getTodayWithNoTime, getCurrentWeek} from "./handlingDate";
import Day from './day'
//TODO on open these page fetch data from rest api
const TurniWrapper = () => {
    const today = getTodayWithNoTime();
    //TODO pass data to Day 
    // to fetch useEffect! https://www.robinwieruch.de/react-hooks-fetch-data
    const getData = async () =>{
        const response = await fetch('http://localhost:3001/getturns')
        .then(response=> response.json())
        .then(data=>console.log(data))
        return response
    }
    console.log(getData())
    return <Box m="5px" onClick={()=>{getData()}}> <Day days={getCurrentWeek(today)} /></Box>;
};

export default TurniWrapper;
