import { useState } from "react";
import "../styles/components/add-card-modal.scss";
import { ColourOptions } from "./Card";
import ColorPalette from "./ColorPalette";
import EditableCard from "./EditableCard";
import IconCross from "./Icons/IconCross";
type AddCardModalProps = {
  onClose: () => void;
  addCard: ({ name, colour }: { name: string; colour: ColourOptions }) => void;
};
const AddCardModal = ({ onClose, addCard }: AddCardModalProps) => {
  const [activeBackgroundColor, setActiveBackgroundColor] =
    useState<ColourOptions>("#12192D");
  const [name, setName] = useState("");
  return (
    <div className="add-card-modal">
      <div className="add-card-modal__content">
        <button
          className="add-card-modal__content__close-button"
          onClick={onClose}
        >
          <IconCross />
        </button>
        <p>Create Virtual Card</p>
        <EditableCard
          backgroundColor={activeBackgroundColor}
          onNameChange={(updatedName) => setName(updatedName)}
        ></EditableCard>
        <ColorPalette
          onClick={(color) => setActiveBackgroundColor(color)}
        ></ColorPalette>
        <button
          className="add-card-modal__content__confirm"
          onClick={() => addCard({ name, colour: activeBackgroundColor })}
          // name.length is not the ideal check for max length ideally this should be done using the form attributes but need to be quick here as I'm running out of time
          disabled={!name.length || name.length > 50}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default AddCardModal;
