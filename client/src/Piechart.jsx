import React from "react";
import {ApplicationContext} from "./App";
import {useContext} from "react";
export const Piechart = () =>{
    const appContext = useContext(ApplicationContext);
    const data = {
        labels: appContext.sample.map((data)=>{
            return data.
        }),
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      const config = {
        type: 'doughnut',
        data: data,
      };
}