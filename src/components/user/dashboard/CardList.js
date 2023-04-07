import React from "react";
import "./CardList.css";

const Card = ({ title, description, color }) => {
  return (
    <div className={`card d-flex justify-content-center py-3 border-0`} style={{background:"black"}}>
      <div className="card-body m-auto">
        <div>

        <h3 className={`card-title`}>{title}</h3>
        </div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: "About",
      description:
        "A community of Developers, Designers and Programmers who grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
      color: "yellow",
    },
    {
      title: "Stuff we make",
      description:
        "Our aim is to learn and teach. Developers, Designers and Programmers come together under one roof to create a community which inspires thousands.",
      color: "blue",
    },
    {
      title: "Who we are",
      description:
        "We're a team of Developers, Designers and Programmers who work independently towards learning, contributing and collaborating in unison.",
      color: "red",
    },
    {
      title: "Events we align",
      description:
        "We organize amazing events on a wide range of technical topics where you can learn new skills through hands-on workshops and take pride on nurturing an inclusive environment for everyone and anyone interested in tech!",
      color: "green",
    },
  ];

  return (
    <div className="card-list d-flex">
      {cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default CardList;
