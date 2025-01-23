import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  let [name, setName] = useState('');
  let [age, setAge] = useState('');
  let [students, setStudents] = useState([]);
  let [error, setError] = useState({ name: '', age: '' });

  let handleAddStudent = () => {
    // Validation
    let nameError = '';
    let ageError = '';
    
    if (name.length <= 3) {
      nameError = 'Name length > 3';
    }
    if (!age || age <= 18) {
      ageError = 'Age Required > 18';
    }

    setError({ name: nameError, age: ageError });

    if (!nameError && !ageError) {
      setStudents([...students, { id: students.length + 1, name, age }]);
      setName('');
      setAge('');
    }
  };

  let handleRemoveStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="container section-1">
      <div className="form-section">
        <div className="form-group">
          <label className='mb-2'>Enter Student Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name && <small className="text-danger">{error.name}</small>}
        </div>
        <div className="form-group">
          <label className='mb-2'>Enter Student Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {error.age && <small className="text-danger">{error.age}</small>}
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleAddStudent}>Add Student</button>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleRemoveStudent(student.id)}>
                  Remove Student
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
