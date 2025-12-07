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

  const [timeLeft, setTimeLeft] = useState(100);
  const [timerActive, setTimerActive] = useState(true);

  const [gameWon, setGameWon] = useState(false); // 👈 NEW

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffled);
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);

    setTimeLeft(100);
    setTimerActive(true);
    setGameWon(false); // reset win status
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  // Timer Logic
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(t);
    }

    if (timeLeft === 0) {
      alert("⏰ Time's up! Restarting game...");
      shuffleCards();
    }
  }, [timeLeft, timerActive]);

  // Matching Logic
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

  // Detect Game Win
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setTimerActive(false);
      setGameWon(true);

      // 👇 Auto open portfolio after 1.5 sec
      setTimeout(() => {
        onComplete();   // 🔥 switches to your portfolio correctly
      }, 1500);
      
    }
  }, [cards]);

  const handleClick = (card) => {
    if (disabled) return;
    if (card === firstCard) return;

    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  return (
    <div className="game-container">
      <h2 className="title">Complete the Game to Enter Portfolio </h2>

      <h3 className="timer">⏱ Time Left: {timeLeft}s</h3>

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

      {/* ⭐ YOU WIN MESSAGE AT BOTTOM */}
      {gameWon && <div className="you-win-message">🎉 You Win! Opening Portfolio...</div>}
    </div>
  );
}
