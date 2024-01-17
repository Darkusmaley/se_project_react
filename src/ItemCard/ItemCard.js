const ItemCard = ({ x }) => {
  return (
    <div>
      <div>
        <img src={x.link} className="card__section-image" />
      </div>
      <div className="card__name">{x.name}</div>
    </div>
  );
};

export default ItemCard;
