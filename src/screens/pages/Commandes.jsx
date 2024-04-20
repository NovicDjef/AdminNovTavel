
  import React, { useEffect, useState } from 'react'
  import "./styles/user.css"
  import { useDispatch, useSelector } from 'react-redux';
  import { Link } from 'react-router-dom';
  import { FiSearch } from 'react-icons/fi'
import { fetchcommandes } from '../../redux/action/commandeActions';
import { fetchRepas } from '../../redux/action/repasActions';
import { fetchUsers } from '../../redux/action/userAction';
  
  
  export default function Commandes() {
      const dispatch = useDispatch();
      const commandes = useSelector((state) => state.commandes.commandes);
      const loading = useSelector((state) => state.commandes.loading);
      const error = useSelector((state) => state.commandes.error);
      const plats = useSelector((state) => state.repas.repas);
      const users = useSelector((state) => state.users.users);
      console.log(commandes)
      console.log("plats", plats)
      useEffect(() => {
        dispatch(fetchcommandes());
        dispatch(fetchRepas());
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
              <th> Quantités </th>
              <th>utilisateur </th>
              <th>nom repas</th>
              <th>livraisonId</th>
              <th>Date </th>
              <th>Date Edite</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
              {commandes.map((commande, index) => {
                const plat = plats.find(plat => plat.id === commande.platsId); 
                const nomPlat = plat ? plat.nom : 'Plat inconnu'; 
                const user = users.find(user => user.id === commande.userId); 
                const nomUser = user ? user.username : 'User inconnu'; 
                // const livraison = livraisons.find(livraison => livraison.id === commande.livraisonId); 
                // const livraisonplat = livraison ? livraison.nom : 'livraison inconnu'; 
                return(
                  <tr key={index}>
                  <td>{commande.id}</td>
                  <td>{commande.quantity}</td>
                  <td>{nomUser}</td>
                  <td>{nomPlat}</td>
                  <td>{commande.livraisonId}</td>
                  <td>{formatDate(commande.createdAt)}</td>
                  <td>{formatDate(commande.updateAt)}</td>
                  <td>
                      <button className='btn btn-sm btn-primary text-white'> Edite</button>
                      <button className='btn btn-sm btn-danger ms-2 mt-1 text-white '> Delete</button>
                  </td>
              </tr>
                )
  })}
            </tbody>
        </table>
          )}
      </div>
    </main>
          
    )
  }
  
