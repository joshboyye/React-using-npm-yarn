import { createContext,useState,favoriteMeetup} from "react";

const FavoritesContext =createContext({
    favorites: [],
    totalFavorites:0,
    addFavorite:(favoriteMeetup)=>{},
    removerFavorite:(meetupId)=>{},
    itemIsFavorite:(meetupId)=>{}
});

export function FavoritesContextProvider(props){
    const [userFavorites,setUserFavorites]=useState([]);

    function addFavoriteHandler(){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removerFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites=>{
            return prevUserFavorites.filter(meetup=>meetup.id!==meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup=> meetup.id===meetupId);
    }


    const context={
        favorites:userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite:addFavoriteHandler,
        removerFavorite: removerFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;