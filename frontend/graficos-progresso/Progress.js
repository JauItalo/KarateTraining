

import React from 'react';
import {Line} from 'react-chartjs-2'



const Progress = ({ data}) => {
    const charData = {
        labels: data.map((training) => new Date(training.date).toLocaleDateString()),
        datasets:[
            {
                label: 'Duration (minutes)',
                data: data.map((training)=> training.duration),
                borderColor: 'rgba(75,192,192,1',
                fill: false,
            },
        ],
    };

    return <Line data={charData} />
};

export default Progress;