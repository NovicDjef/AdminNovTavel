
  import React, { useEffect, useState } from 'react'
  import "./styles/restaurant.css"
  import { useDispatch, useSelector } from 'react-redux';
  import { Link } from 'react-router-dom';
  import { fetchRestaurants } from '../../redux/action/restaurantActions';
  import { FiSearch } from 'react-icons/fi'
  
  
  export default function Restaurants() {
      const dispatch = useDispatch();
      const restaurants = useSelector((state) => state.restaurants.restaurants);
      const loading = useSelector((state) => state.restaurants.loading);
      const error = useSelector((state) => state.restaurants.error);
      console.log(restaurants)
  
      useEffect(() => {
          dispatch(fetchRestaurants())
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
        <div>Restaurants</div>
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
              <th>Image</th>
              <th> Nom </th>
              <th>Phone </th>
              <th>Adresse</th>
              <th>VilleId</th>
              <th>AdminId</th>
              <th>Date</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
              {restaurants.map((restaurant, index) => (
                  <tr key={index}>
                      <td>{restaurant.id}</td>
                      <td>{restaurant.image}</td>
                      <td>{restaurant.nom}</td>
                      <td>{restaurant.phone}</td>
                      <td>{restaurant.adresse}</td>
                      <td>{restaurant.villeId}</td>
                      <td>{restaurant.AdminId}</td>
                      <td>{formatDate(restaurant.createdAt)}</td>

                      <td>
                          <button className='btn btn-sm btn-primary text-white mt-1'> Edite</button>
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
  
