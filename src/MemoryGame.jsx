import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

export default function MemoryGame({ onComplete }) {
  const cardImages = [
    { src: "/img/img1.jpeg", matched: false },
    { src: "/img/img2.jpeg", matched: false },
    { src: "/img/img3.jpeg", matched: false },
    { src: "/img/img4.jpeg", matched: false },
    { src: "/img/img5.jpg", matched: false },
    { src: "/img/img6.webp", matched: false },
  ];

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffled);
    setFirstCard(null);
    setSecondCard(null);
  };

  // Run once on start
  useEffect(() => {
    shuffleCards();
  }, []);

  // Checking if two cards match
  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);

      if (firstCard.src === secondCard.src) {
        setCards((prev) =>
          prev.map((card) =>
            card.src === firstCard.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 700);
      }
    }
  }, [firstCard, secondCard]);

  // Detecting game completion
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      onComplete(); // Unlock the portfolio 🔥
    }
  }, [cards]);

  const handleClick = (card) => {
    if (!disabled) {
      firstCard ? setSecondCard(card) : setFirstCard(card);
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  return (
    <div className="game-container">
      <h2 className="title">Complete the Game to Enter</h2>

      <button className="reset-btn" onClick={shuffleCards}>
        Restart Game
      </button>

      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${
              card === firstCard || card === secondCard || card.matched
                ? "flipped"
                : ""
            }`}
            onClick={() => handleClick(card)}
          >
            <img className="front" src={card.src} alt="card" />
            <div className="back"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
