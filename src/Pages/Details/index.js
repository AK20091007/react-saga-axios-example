import * as React from 'react';
import { useLocation } from 'react-router-dom';
import './Styles/Details.css'

function DetailsPage() {

  const location = useLocation();
  const user = location.state;

  return (
    <div>
      <h1 className='heading'> Detailed User Information</h1>
      <div className='container'>
        <img src={user.picture.large} />
        <h2 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h2>
        <table className='deatilsTable'>
          <tbody>
            <tr>
              <td className='cellStyle'>ID (NINO):</td>
              <td className='cellStyle'>{user.id.value}</td>
            </tr>
            <tr>
              <td className='cellStyle'>Email:</td>
              <td className='cellStyle'>{user.email}</td>
            </tr>
            <tr>
              <td className='cellStyle'>Phone:</td>
              <td className='cellStyle'>{user.phone}</td>
            </tr>
            <tr>
              <td className='cellStyle'>Cell:</td>
              <td className='cellStyle'>{user.cell}</td>
            </tr>
            <tr>
              <td className='cellStyle'>Address:</td>
              <td className='cellStyle'>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}`}</td>
            </tr>
            <tr>
              <td className='cellStyle'>Age:</td>
              <td className='cellStyle'>{user.dob.age}</td>
            </tr>
            <tr>
              <td className='cellStyle'>Date of Birth:</td>
              <td className='cellStyle'>{user.dob.date.split('T')[0]}</td>
            </tr>
            <tr>
              <td className='cellStyle'>Gender:</td>
              <td className='cellStyle'>{user.gender}</td>
            </tr>
            <tr>
              <td className='cellStyle'>Registered Date:</td>
              <td className='cellStyle'>{user.registered.date.split('T')[0]}</td>
            </tr>
            <tr>
              <td className='cellStyle'>Nationality:</td>
              <td className='cellStyle'>{user.nat}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
export default DetailsPage;
