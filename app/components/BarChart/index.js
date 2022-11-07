import React from 'react';
import { Chart } from './styles';

const BarChart = ({ data }) => {
    return (
        <Chart alt='Grafico' src={"https://quickchart.io/chart?c={type:'bar',data:" + JSON.stringify(data) + "}"} />
    );

}

export default BarChart;