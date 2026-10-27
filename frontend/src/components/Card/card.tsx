type CardProps = {
  _id: number;
  name: string;
  imageUrl: string;
};

const Card = ({ _id, name, imageUrl }: CardProps) => {
  return (
    <div>
      <div key={_id}>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
