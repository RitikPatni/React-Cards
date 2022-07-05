import IconPlus from "./Icons/IconPlus";
import "../styles/components/add-new-card.scss";

type AddNewCardProps = { onClick: () => void };
const AddNewCard = ({ onClick }: AddNewCardProps) => (
  <button className="add-new-card" onClick={onClick}>
    <span className="add-new-card__plus-wrapper">
      <IconPlus></IconPlus>
    </span>
    <p className="add-new-card__text">Create/Activate Cards</p>
  </button>
);

export default AddNewCard;
