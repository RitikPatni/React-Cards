import React from "react";
import "../styles/components/carousel.scss";
type CarouselProps = {
  children: React.ReactNode;
};
const Carousel = ({ children }: CarouselProps) => (
  <section className="carousel">{children}</section>
);
export default Carousel;
