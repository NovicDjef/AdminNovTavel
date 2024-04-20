import React, { useEffect, useState } from 'react'
import "./styles/user.css"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../redux/action/userAction';
import { FiSearch } from 'react-icons/fi'


export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const loading = useSelector((state) => state.users.loading);
    const error = useSelector((state) => state.users.error);
    console.log(users)

    useEffect(() => {
        dispatch(fetchUsers());
    },[])
    const formatDate = (createdAt) => {
      const date = new Date(createdAt);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      const hour = ('0' + date.getHours()).slice(-2);
      const minute = ('0' + date.getMinutes()).slice(-2);
      return `${day}/${month}/${year} à ${hour}:${minute}`;
  };
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <main className='main-container'>
    <div className='main-title'>
      <div>User</div>
    </div>
    <div className='postion'>
        <div className="input-wrapper">
      <button className="icons">
        <FiSearch size="25px" color="#fff" />
      </button>
      <input
        type="text"
        name="text"
        className="input"
        placeholder="Search.."
        value={searchTerm}
        onChange={handleInputChange}
      />
        </div>
        <Link to='./create' className='btn btn-success my-3 text-white'> Create +</Link>
      </div>
    <div className="table-container">
    {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
      <table>
        <thead>
          <tr>
            <th>#ID</th>
            <th> Username </th>
            <th>Phone </th>
            <th>Image</th>
            <th>Date </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.image}</td>
                    <td>{formatDate(user.createdAt)}</td>
                    <td>
                        <button className='btn btn-sm btn-primary text-white'> Edite</button>
                        <button className='btn btn-sm btn-danger ms-2 mt-1 text-white '> Delete</button>
                    </td>
                </tr>
            ))}
          </tbody>
      </table>
        )}
    </div>
  </main>
        
  )
}
