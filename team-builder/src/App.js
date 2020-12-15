import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import TeamMemberForm from './components/TeamMemberForm'

const initialFormValues = {
  // Text Inputs
  fname: '',
  lname: '',
  email: '',
  role: '' // Dropdown Select
};

function App() {
const [teamMembers, setTeamMembers] = useState([]); 
const [formValues, setFormValues] = useState(initialFormValues);


  return (
    <div>
      <h1>Team Member Form</h1>
      
      <TeamMemberForm 
        values={formValues}
      />
      
    </div>
  )
}

export default App;

