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
    };

    return(
        <form onSubmit={handleSubmit}>
        <select name="type" value={formData.type} onChange={handleChange}required>
            <option value="">Select Type</option>
            <option value="Kihon">Kihon</option>
            <option value="Kata">Kata</option>
            <option value="Kumite">Kumite</option>

        </select>

        <input
            type="number"
            name="duration"
            placeholder="Duration (minutes)"
            value={formData.duration}
            onChange={handleChange}
            required
        />

        <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
        />
        
        <button type="submit">Add Training</button>

        </form>
        );
};

export default TrainingForm;