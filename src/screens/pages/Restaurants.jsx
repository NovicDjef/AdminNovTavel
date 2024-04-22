
  import React, { useEffect, useState } from 'react'
  import "./styles/restaurant.css"
  import { Modal, Button, Form } from 'react-bootstrap';
  import { useDispatch, useSelector } from 'react-redux';
  import { Link } from 'react-router-dom';
  import { addRestaurant, fetchRestaurants, updateRestaurant } from '../../redux/action/restaurantActions';
  import { FiSearch } from 'react-icons/fi'
  
  
  export default function Restaurants() {
      const dispatch = useDispatch();
      const restaurants = useSelector((state) => state.restaurants.restaurants);
      const loading = useSelector((state) => state.restaurants.loading);
      const error = useSelector((state) => state.restaurants.error);
      const [selectedRestaurant, setSelectedRestaurant] = useState(null); // Restaurant sélectionné pour édition
      const [showModal, setShowModal] = useState(false);
      const [imageFile, setImageFile] = useState(null);
      const [imagePreview, setImagePreview] = useState(null);
      const [showAddModal, setShowAddModal] = useState(false);
      const [formData, setFormData] = useState({
        nom: '',
        phone: '',
        adresse: '',
        image: null
      });

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
    const baseURL= 'http://172.20.10.4:3000';
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append('nom', formData.nom);
      data.append('phone', formData.phone);
      data.append('adresse', formData.adresse);
      data.append('image', formData.image);
      
      dispatch(addRestaurant(data));
      setShowAddModal(false);
    };
    const handleImageChanges = (e) => {
      setFormData({ ...formData, image: e.target.files[0] });
    };
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
    const handleEdit = (restaurant) => {
      setSelectedRestaurant(restaurant);
      setImageFile(null); 
      setImagePreview(`${baseURL}/images/${restaurant.image}`);
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    const handleSaveEdit = () => {
      dispatch(updateRestaurant(selectedRestaurant.id, selectedRestaurant));
      setShowModal(false);
      setSelectedRestaurant(null);
    };
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImageFile(file);
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
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
        <Button variant="success" className='btn btn-success my-3 text-white'  onClick={() => setShowAddModal(true)}>Ajouter un restaurant +</Button>
        {/* <Link to='./create' className='btn btn-success my-3 text-white' onClick={() => setShowAddModal(true)}> Create +</Link> */}
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
                      <td>
                        <img src={baseURL+`/images/${restaurant.image}`} alt="Restaurant" style={{ width: '100px', height: '70px' }} />
                      </td>
                      <td>{restaurant.nom}</td>
                      <td>{restaurant.phone}</td>
                      <td>{restaurant.adresse}</td>
                      <td>{restaurant.villeId}</td>
                      <td>{restaurant.AdminId}</td>
                      <td>{formatDate(restaurant.createdAt)}</td>

                      <td>
                          <button className='btn btn-sm btn-primary text-white mt-1' onClick={() => handleEdit(restaurant)}> Edite</button>
                          <button className='btn btn-sm btn-danger ms-2 mt-1 text-white '> Delete</button>
                      </td>
                  </tr>
              ))}
            </tbody>
        </table>
          )}
      </div>

      {/* Modal pour l'édition */}
      {selectedRestaurant && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton className="white-text">
            <Modal.Title style={{ color: 'white' }}>Modifier le restaurant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicNom">
                <Form.Label className="white-text">Nom</Form.Label>
                <Form.Control style={{ color: "#afafaf" }} type="text" name="nom" value={selectedRestaurant.nom} onChange={(e) => setSelectedRestaurant({ ...selectedRestaurant, nom: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label className="white-text">Téléphone</Form.Label>
                <Form.Control style={{ color: "#afafaf" }} type="text" name="phone" value={selectedRestaurant.phone} onChange={(e) => setSelectedRestaurant({ ...selectedRestaurant, phone: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAdresse">
                <Form.Label className="white-text">Adresse</Form.Label>
                <Form.Control style={{ color: "#afafaf" }} type="text" name="adresse" value={selectedRestaurant.adresse} onChange={(e) => setSelectedRestaurant({ ...selectedRestaurant, adresse: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicVille">
                <Form.Label className="white-text">Ville</Form.Label>
                <Form.Control style={{ color: "#afafaf" }} type="text" name="villeId" value={selectedRestaurant.villeId} onChange={(e) => setSelectedRestaurant({ ...selectedRestaurant, villeId: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image</Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Control type="file" name="image" onChange={handleImageChange} />
                    {imagePreview && <img src={imagePreview} alt="Preview" style={{ margin: '10px', maxWidth: '120px', maxHeight: '85px' }} />}
                  </div>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Annuler
            </Button>
            <Button variant="primary" onClick={handleSaveEdit}>
              Enregistrer
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Ajout de restaurant  */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouveau restaurant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicNom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Nom" name="nom" value={formData.nom} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="text" placeholder="Téléphone" name="phone" value={formData.phone} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formBasicAdresse">
              <Form.Label>Adresse</Form.Label>
              <Form.Control type="text" placeholder="Adresse" name="adresse" value={formData.adresse} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleImageChanges} accept="image/*" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Ajouter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </main>
  );
}

