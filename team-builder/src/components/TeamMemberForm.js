import React from 'react'

export default function TeamMemberForm(props) {
    const { values, update, submit } = props;

    const onChange = event => {
        const { name, value } = event.target
        update(name, value) // callback from props 
    }

    const onSubmit = event => {
        // doesn't allow browser to reload which would cause it to go back to initial form state/values
        event.preventDefault();
        submit(); // callback from props
    }
    
    return (
        <form className="form container" onSubmit={onSubmit}>
            <div  className="form-group inputs">
                
                <label>
                    First Name:
                    <input name='fname' type='text' placeholder='Enter First Name...' maxLength='25' value={values.fname} onChange={onChange} /><br></br>
                </label>
                <label>
                    Last Name:
                    <input name='lname' type='text' placeholder='Enter Last Name...' maxLength='25' value={values.lname} onChange={onChange} /><br></br>
                </label>
                <label>
                    E-Mail:
                    <input name='email' type='email' placeholder='Enter E-Mail...' maxLength='30' value={values.email} onChange={onChange} /><br></br>
                </label>
                <label>
                    Role:
                    <select name='role' values={values.role} onChange={onChange}>
                        <option value=''>-------Select Role-------</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Software Engineer'>Software Engineer</option>
                        <option value='Project Manager'>Project Manager</option>
                        <option value='Designer'>Designer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}
