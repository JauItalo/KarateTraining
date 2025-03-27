import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import TrainingForm from '../components/TrainingForm';
import Progress from '../graficos-progresso/Progress';


const HomePage = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        const fetchTrainings = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/trainings');

                setTrainings(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTrainings();
    }, []);

        return (
            <div>
                <h1>Karate Training App</h1>
                <TrainingForm />
                <Progress data={trainings} />
                <ul>
                    {trainings.map((training) => (
                        <li key={training._id}>
                            <strong>{training.type}</strong> - {training.duration} minutes
                            <p>{training.notes}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }


export default HomePage;