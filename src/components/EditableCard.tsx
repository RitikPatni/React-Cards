import { useState } from "react";
import { ColourOptions } from "./Card";
import CardWrapper from "./CardWrapper";
import IconEdit from "./Icons/IconEdit";
import "../styles/components/editable-card.scss";

type EditableCardProps = {
  backgroundColor: ColourOptions;
  onNameChange: (name: string) => void;
};
// NOTE: We could have instead gone for a single card component as there is only one property that user can change but have already created the wrapper and all so moving back will consume a lot more time

const EditableCard = ({ backgroundColor, onNameChange }: EditableCardProps) => {
  const [editable, setEditable] = useState<boolean>(false);
  return (
    <CardWrapper backgroundColor={backgroundColor}>
      <fieldset className="editable-card">
        <label htmlFor="name">Name</label>
        {editable ? (
          <input
            type="text"
            name="name"
            id="name"
            onChange={(event) => onNameChange(event.target.value)}
            disabled={!editable}
            className="editable-card__input"
            maxLength={50}
          />
        ) : (
          <button
            title="Add Name"
            aria-label="Add Name"
            onClick={() => {
              setEditable(true);
            }}
            className="editable-card__button"
          >
            <IconEdit></IconEdit>
          </button>
        )}
      </fieldset>
    </CardWrapper>
  );
};

export default EditableCard;
