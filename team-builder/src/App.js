import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import TeamMemberForm from './components/TeamMemberForm'
import TeamMember from './components/TeamMember'


// set the initial values of the form to be empty
const initialFormValues = {
  // Text Inputs
  fname: '',
  lname: '',
  email: '',
  role: '' // Dropdown Select
};

function App() {
// two slices of state
const [teamMembers, setTeamMembers] = useState([]); 
const [formValues, setFormValues] = useState(initialFormValues);


// update form:
// use the setFormValue - copy the orignal current state of formValues
// use bracket notation for the property name and set the new input value
const updateTeamForm = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue});
}



// submit form:
// create new member object, trims the whitespace from input values of first/last name, email
const submitTeamForm = () => {
  const newMember = {
    fname: formValues.fname.trim(),
    lname: formValues.lname.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  }
// prevent further action in the form if one of the inputs (fname, lname, email, role) is empty after trim
  if (!newMember.fname || !newMember.lname || !newMember.email || !newMember.role) return;
  
}


  return (
    <div className='container'>
      <h1>Team Member Form</h1>
      
      <TeamMemberForm 
        values={formValues} 
        update={updateTeamForm}
        submit={submitTeamForm}
      />

      {teamMembers.map((teamMember) => {
        return <TeamMember key={teamMember.id} memberInfo={teamMember} />
      })}

    </div>
  )
}

export default App;

