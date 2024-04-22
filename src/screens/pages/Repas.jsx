
  import React, { useEffect, useState } from 'react'
  import "./styles/repas.css"
  import { useDispatch, useSelector } from 'react-redux';
  import { Link } from 'react-router-dom';
  import { fetchRepas } from '../../redux/action/repasActions';
  import { FiSearch } from 'react-icons/fi'
  
  export default function Repas() {
      const dispatch = useDispatch();
      const plats = useSelector((state) => state.repas.repas);
      const loading = useSelector((state) => state.repas.loading);
      const error = useSelector((state) => state.repas.error);
      console.log(plats)
    
      useEffect(() => {
        dispatch(fetchRepas());
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
    const baseURL= 'http://172.20.10.4:3000';
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
    return (
      <main className='main-container'>
      <div className='main-title'>
        <div>repas Proposés</div>
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
              <th>Prix</th>
              <th>description </th>
              <th>quantité</th>
              <th>RestaurantId</th>
              <th>categoriesId</th>
              <th>Date</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
              {plats.map((plat, index) => (
                  <tr key={index}>
                      <td>{plat.id}</td>
                      <td>
                        <img src={baseURL+`/images/${plat.image}`} alt="PLats" style={{ width: '100px', height: '70px' }} />
                      </td>
                      <td>{plat.nom}</td>
                      <td>{plat.prix}</td>
                      <td>{plat.description}</td>
                      <td>{plat.quantity}</td>
                      <td>{plat.restaurantId.nom}</td>
                      <td>{plat.categorieId}</td>
                      <td>{formatDate(plat.createdAt)}</td>

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
  
