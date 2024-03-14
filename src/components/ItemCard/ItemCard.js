import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemCard = ({ item, onSelectCard, handleCardLike, isloggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const id = item._id;
  const isLiked = item.likes.some((user) => {
    return user.includes(currentUser?._id);
  });
  const likeButtonClass = `itemcard__likebutton ${
    isLiked ? "itemcard__likebutton_liked" : ""
  }`;

  const handleLike = () => {
    handleCardLike(id, isLiked);
  };

  return (
    <div className="card__container">
      <button
        className={likeButtonClass}
        type="button"
        onClick={handleLike}
      ></button>

      <img
        src={item.imageUrl}
        className="card__section-image"
        onClick={() => onSelectCard(item)}
        alt={item.name}
      />
      <h3 className="card__name">{item.name}</h3>
    </div>
  );
};

export default ItemCard;
