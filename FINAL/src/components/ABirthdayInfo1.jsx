import  { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/abirthdayinfo1.css'

const ABirthdayInfo1 = () => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios.get('http://localhost:8080/api/info')
      .then(response => {
        setInfoList(response.data);
      })
      .catch(error => {
        console.error('Error fetching details:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h2> Order Details</h2>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Quantity</th>
            <th>Gift Name</th>
            <th>Gift Wrap</th>
            <th>Gift Message</th>
            <th>Receiver</th>
            <th>Sender</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {infoList.map(info => (
            <tr key={info.id}>
              {/* <td>{info.id}</td> */}
              <td>{info.quantity}</td>
              <td>{info.giftName}</td>
              <td>{info.giftWrap}</td>
              <td>{info.giftMessage}</td>
              <td>{info.receiver}</td>
              <td>{info.sender}</td>
              <td>{info.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ABirthdayInfo1;
