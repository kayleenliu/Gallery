import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (likedPhoto) => {},
  removeFavorite: (photoId) => {},
  photoIsLiked: (photoId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(likedPhoto) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(likedPhoto);
    });
  }

  function removeFavoriteHandler(photoId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((photo) => photo.id !== photoId);
    });
  }

  function photoIsLikedHandler(photoId) {
    return userFavorites.some((photo) => photo.id === photoId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    photoIsLiked: photoIsLikedHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
