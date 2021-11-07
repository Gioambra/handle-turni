import {Box} from "@chakra-ui/react";
import { useEffect } from "react";
import Axios from 'axios';  
import {getTodayWithNoTime, getNextDay, getCurrentWeek} from "./handlingDate";
import Day from './day'

const TurniWrapper = () => {



    const today = getTodayWithNoTime();
    /*
    const getData = async () =>{
        const response = await fetch('http://localhost:3001/getturns', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors
          });
        console.log(response)
        return response
    }
     const myfetch = async() =>{
        getData();
    }
*/
    //console.log(getCurrentWeek(today));

    //TODO gestire visulalizzazione prossimi 7 giorni e creare docker file e database postgres?
    return <Box m="5px" onClick={()=>{myfetch()}}> <Day days={getCurrentWeek(today)} /></Box>;
};

export default TurniWrapper;
