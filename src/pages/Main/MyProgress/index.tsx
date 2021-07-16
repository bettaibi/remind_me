import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useCache } from '../../../cache';

let pieConfig = {
    label: '# of Votes',
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
}
let InitialData = {
    labels: ['Verbs', 'Nouns', 'Adjectives', 'Adverbs', 'Phrasal Verbs', 'Linkers'],
    datasets: [
      {
        ...pieConfig,
        data: [0, 0, 0, 0, 0, 0],
      },
    ],
};

const MyProgress: React.FC = () => {
    const { getStatistics } = useCache('');
    const [data, setData] = useState(InitialData);

    useEffect(()=> {
        getStatistics().then((res)=> {
            if(res.success){
                setData(
                    {
                        labels: ['Verbs', 'Nouns', 'Adjectives', 'Adverbs', 'Phrasal Verbs', 'Linkers'],
                        datasets: [
                          {
                            ...pieConfig,
                            data: [...res.data],
                          },
                        ], 
                    }
                )
            }
        })
    }, []);

    return (
        <div className="border bg-light p-3 rounded" style= {{maxHeight: '500px'}}>
            <h6>My progress</h6>
            <div style= {{height: '400px'}}>
                 <Pie data={data} type="pie" options={{ maintainAspectRatio: false }} />
            </div>
        </div>
    )
};

export default MyProgress;
