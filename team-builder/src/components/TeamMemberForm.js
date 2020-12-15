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
        <form onSubmit={onSubmit}>
            <div>
                
                <label>
                    First Name:
                    <input name='fname' type='text' placeholder='Enter First Name...' maxLength='25' values={values.fname} onChange={onChange} /><br></br>
                </label>
                <label>
                    Last Name:
                    <input name='lname' type='text' placeholder='Enter Last Name...' maxLength='25' values={values.lname} onChange={onChange} /><br></br>
                </label>
                <label>
                    E-Mail:
                    <input name='email' type='email' placeholder='Enter E-Mail...' maxLength='30' values={values.email} onChange={onChange} /><br></br>
                </label>
                <label>
                    Role:
                    <select name='role' values={values.role} onChange={onChange}>
                        <option value=''>-------Select Role-------</option>
                        <option value='frontend'>Frontend Engineer</option>
                        <option value='backend'>Backend Engineer</option>
                        <option value='software'>Software Engineer</option>
                        <option value='project'>Project Manager</option>
                        <option value='designer'>Designer</option>
                    </select>
                </label>

                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
}
