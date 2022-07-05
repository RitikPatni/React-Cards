import React from "react";
import "../styles/components/card.scss";
import { ColourOptions } from "./Card";
import SpenmoLogo from "../assets/spenmo-logo.png";

type CardWrapperProps = {
  children: React.ReactNode;
  backgroundColor: ColourOptions;
  expiry?: string;
};
const CardWrapper = ({
  children,
  backgroundColor,
  expiry,
}: CardWrapperProps) => (
  <article className="card-wrapper" style={{ backgroundColor }}>
    <img src={SpenmoLogo} alt="Spenmo Logo" className="card__logo" />
    {children}
    <p className="card__expiry">
      <span className="card__expiry__title">Expiry</span>
      <br />
      {expiry || "00/00"}
    </p>
  </article>
);
export default CardWrapper;
