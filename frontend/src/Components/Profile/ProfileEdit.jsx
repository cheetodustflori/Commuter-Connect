import React from 'react'
import './Styles/ProfileEdit.css'

const ProfileEdit = ({onDataChange}) => {

    const [profileChange, setProfileData] = React.useState({
        username:'',
        email:'',
        first_name:'',
        last_name:'',
        password:''
    });
    const handleChange = (e) => {
        const {name, value } = e.target;
        const newData = {...profileChange, [name]:value};
        setProfileData(newData);
        onDataChange(newData);
    };

  return (
    <div className='profileUserInfo'>
        <div id='profileInformation'>
            <h3>Username</h3>
            <input name="username" 
                    value={profileChange.username}
                    onChange = {handleChange}
                    placeholder='Username'
                    />
        </div>

        <div className='firstAndLastName'>
            <div id='profileInformation'>
                <h3>First Name</h3>
                <input name="first_name"
                        value={profileChange.first_name}
                        onChange={handleChange}
                        placeholder="FirstName"
                 />
            </div>
            <div id='profileInformationLastName'>
                <h3>Last Name</h3>
                <input name="last_name"
                        value={profileChange.last_name}
                        onChange={handleChange}
                        placeholder="LastName"
                />
            </div>
        </div>

        <div className='firstAndLastName'>

            <div id='profileInformation'>
                <h3>Email</h3>
                <input name="email" 
                        value={profileChange.email}
                        onChange={handleChange}
                        placeholder="Email"
                />
            </div>

            <div id='profileInformation'>
                <h3>Password</h3>
                <input name="password" 
                        type='password'
                        value={profileChange.password}
                        onChange={handleChange}
                        placeholder="Password"
                        />
            </div>
        </div>
        
    </div>
  )
}

export default ProfileEdit