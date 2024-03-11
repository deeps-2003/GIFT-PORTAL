import  { useState } from 'react';
import '../assets/css/userprofile.css';
import bgimg2 from '../assets/images/pic4.jpg'; 

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'Deepika',
    email: 'deeps@gmail.com',
    address: '123 Main St, Tiruppur',
    phoneNumber: '9345615766',
  });

  const [isEditing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <div>
      <div className="body1" style={{ background: `url(${bgimg2}) center/cover no-repeat` }}>
        <h1>User Profile</h1>
        {isEditing ? (
          <div className="form1">
            <form onSubmit={handleSubmit}>
              <label className="label1">
                Name:<span className="tab"/>
                <input type="text" className="input1" name="name" value={userDetails.name} onChange={handleChange} />
              </label>
              <br/>

<label className='label1'>
  Email:<span className="tab"/>
  <input type="email" className='input1' name="email" value={userDetails.email} onChange={handleChange} />
</label>
<br/>

<label className='label1'>
  Address:<span className="tab"/>
  <input type="text" className='input1' name="address" value={userDetails.address} onChange={handleChange} />
</label >
<br/>

<label className='label1'>
  Phone Number:<span className="tab"/> 
  <input className='input1' type="tel" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} />
</label>
{/* <Link to="/home"> */}
              <button className="buttonu" type="submit">Save Changes</button>
              {/* </Link> */}
            </form>
          </div>
        ) : (
          <div className="display">
            <p className="p1"><b>Name:  </b>{userDetails.name}</p><br></br>
            <p className='p1'><b>Email:  </b> {userDetails.email}</p><br></br>
          <p className='p1'><b>Address:  </b> {userDetails.address}</p><br></br>
          <p className='p1'><b>Phone Number:  </b> {userDetails.phoneNumber}</p>
          <br/>

            <div className="edit-click">
              <button onClick={() => setEditing(true)}>Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;