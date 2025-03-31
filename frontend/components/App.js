import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [trainings, setTrainings] = useState([]);
  const [formData, setFormData] = useState({ 
    type: 'Kihon', 
    duration: 60,
    notes: '' 
  });

  // Busca treinos
  useEffect(() => {
    fetch('http://localhost:5000/api/trainings')
      .then(res => res.json())
      .then(data => setTrainings(data));
  }, []);

  // Envia novo treino
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/trainings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(() => window.location.reload());
  };

  return (
    <div className="App">
      <h1>Karate Training</h1>
      
      <form onSubmit={handleSubmit}>
        <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
          <option value="Kihon">Kihon</option>
          <option value="Kata">Kata</option>
          <option value="Kumite">Kumite</option>
        </select>
        
        <input 
          type="number" 
          placeholder="Duração (min)" 
          value={formData.duration}
          onChange={(e) => setFormData({...formData, duration: e.target.value})}
        />
        
        <textarea 
          placeholder="Notas" 
          value={formData.notes}
          onChange={(e) => setFormData({...formData, notes: e.target.value})}
        />
        
        <button type="submit">Adicionar Treino</button>
      </form>

      <ul>
        {trainings.map(training => (
          <li key={training._id}>
            {training.type} - {training.duration}min
            <p>{training.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;