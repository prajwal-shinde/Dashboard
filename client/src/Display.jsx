import Axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import {Bar} from 'react-chartjs-2';
import { Sidebar } from './Sidebar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useContext} from 'react'
import {ApplicationContext} from "./App";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
export const Display = () => {
   const appContext = useContext(ApplicationContext);

    const labels = appContext.sample.map((data)=>{
        return data.likelihood;
    })
const data = {
  labels: labels,
  datasets: [
    {
    label: 'Dataset 1',
    data: appContext.sample.map((dta)=>{
        return dta.intensity;
    }),
    backgroundColor: ['rgba(255, 99, 132, 0.2)'],
    borderColor: ['rgb(255, 99, 132)',],
    borderWidth: 1
  },
  
]
};
const options = {
    indexAxis:"x",
    elements:{
        bar:{
            borderWidth:20,
        },
    },
    responsive:true,
    plugins:{
        legend:{
            position:"left"
        },
        title:{
            display:true,
            text:"Chart.js Horizontal Bar Chart"
        }
    }
};
   
   
   
    return <>
    <div className='row main'>
        <div className='col-md-2 card shadow' style={{height:"100vh"}}>
            <Sidebar/>
        </div>
        <div className='col-md-10'>
        <div className='card shadow' style={{height:'60%', width:'100%'}}>
    <Bar data={data} options={options}/>
    
    
    </div>
        </div>
    </div>
    
        
    </>
}