import {Box} from "@chakra-ui/react";
import { useEffect } from "react";
import Axios from 'axios';  
import {getTodayWithNoTime, getNextDay, getCurrentWeek} from "./handlingDate";
import Day from './day'
//TODO on open these page fetch data from rest api
const TurniWrapper = () => {
    const today = getTodayWithNoTime();
    const getData = async () =>{
        const response = await fetch('http://localhost:3001/getturns')
        .then(response=> response.json())
        .then(data=>console.log(data))
        return 0;
    }
    //console.log(getCurrentWeek(today));

    //TODO gestire visulalizzazione prossimi 7 giorni e creare docker file e database postgres?
    return <Box m="5px" onClick={()=>{getData()}}> <Day days={getCurrentWeek(today)} /></Box>;
};

export default TurniWrapper;
