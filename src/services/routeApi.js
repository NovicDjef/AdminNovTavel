import apiService from "./Api";

// API Requetes GET
export const getchSomeRestaurant = () => {
    return apiService.get('/restaurants')
  }
  export const getchSomeRepas = () => {
    return apiService.get('/plats');
  };
  export const fetchSomeLots = () => {
    return apiService.get('/lots');
  };
  export const fetchSomeNotifications = () => {
    return apiService.get('/notifications')
  };
  export const getchSomecommandes = () => {
    return apiService.get('/commandes')
  
  };
  export const getchSomeUser = () => {
    return apiService.get('/users')
  }
  

  // API Requete POST :
  
  
  export const fetchSomeGeolocation = (latitude, longitude) => {
    return apiService.post('/geolocalisation', { latitude, longitude })
  };


  
  export const fetchSomeCommande = (cart, userId) => {
    const commande = cart.map(item => ({
      quantity: item.quantity,
      userId: userId, /* ID de l'utilisateur, à remplacer par la valeur réelle */
      platsId: item.id, 
      
    }));
        return apiService.post('/commande', { commande : commande})
  }

  export const addSomeRestaurant = (data) => {
    return apiService.post('/restaurant', data);
  };

  export const fetchSomeAdressLivraison = (adresse) => {
    console.debug("Adresse de livraion: ", adresse);
    return apiService.post('/livraison', {adresse: adresse})
  }

  export const fetchSomeUser = (userData) => {
    return apiService.get('/user/signIn', {userData})
  }
  
  export const fetchSomePhone = (userData) => {
    console.debug("info user: ", userData);
    return apiService.post('/phone-otp', { userData: userData })
  }

  export const fetchSomeValidateOTP = (otpCode) => {
    return apiService.post('/verify-otp', {otpCode: otpCode})
  }
  
  export const fetchSomeGame = ({lotId, userId, selectedNumbers, isWinner}) => {
    return apiService.post('./games', {lotId, userId, selectedNumbers, isWinner})
  }


  // API requete Update
  export const updateSomeRestaurant = (id, data) => {
    return apiService.patch(`/restaurant/${id}`, data);
  };