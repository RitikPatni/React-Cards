import "../styles/components/card.scss";
import CardWrapper from "./CardWrapper";
export type CardProps = {
  card_name: string;
  card_last_four: string;
  expiry: string;
  colour: ColourOptions;
};

export type ColourOptions =
  | "#12192D"
  | "#E32F4C"
  | "#F45631"
  | "#F69D1B"
  | "#F1C849"
  | "#1FCD8E"
  | "#9A50DF";

const Card = ({ card_last_four, card_name, colour, expiry }: CardProps) => {
  return (
    <CardWrapper backgroundColor={colour} expiry={expiry}>
      <p className="card__name">{card_name}</p>
      <p className="card__number">**** **** **** {card_last_four}</p>
    </CardWrapper>
  );
};

export default Card;
