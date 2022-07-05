import { useState } from "react";
import "./styles/common.scss";
import Carousel from "./components/Carousel";
import Card, { CardProps } from "./components/Card";
import AddNewCard from "./components/AddNewCard";
import AddCardModal from "./components/AddCardModal";

function App() {
  const [cards, setCards] = useState<CardProps[]>([
    {
      card_last_four: "1234",
      card_name: "abcd",
      colour: "#12192D",
      expiry: "11/12",
    },
    {
      card_last_four: "1234",
      card_name: "abcd",
      colour: "#1FCD8E",
      expiry: "11/12",
    },
    {
      card_last_four: "1234",
      card_name: "abcd",
      colour: "#9A50DF",
      expiry: "11/12",
    },
    {
      card_last_four: "1234",
      card_name: "abcd",
      colour: "#E32F4C",
      expiry: "11/12",
    },
    {
      card_last_four: "1234",
      card_name: "abcd",
      colour: "#F1C849",
      expiry: "11/12",
    },
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="cards">
      <section className="cards__section">
        <AddNewCard
          onClick={() => {
            setShowModal(true);
          }}
        ></AddNewCard>
        <Carousel>
          {cards.map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </Carousel>
        {showModal && (
          <AddCardModal
            onClose={() => setShowModal(false)}
            addCard={({ colour, name }) => {
              setCards([
                // NOTE: Things can be randomized to enhance the experience here
                {
                  colour,
                  card_name: name,
                  expiry: "12/25",
                  card_last_four: "3245",
                },
                ...cards,
              ]);
              setShowModal(false);
            }}
          ></AddCardModal>
        )}
      </section>
    </div>
  );
}

export default App;
