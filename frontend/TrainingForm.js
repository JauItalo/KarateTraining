import axios from 'axios';
import { useState } from 'react';


const TrainingForm = () => {
    const [formData, setFormData] = useState({
        type:'',
        duration:'',
        notes:'',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/training', formData);
            alert('Training added successufully!');
            setFormData({type: '', duration: '', notes: ''});
        }   catch (err) {
            console.error(err);
        }
    }


    
}