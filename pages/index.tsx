import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/wheel.module.css";

const Home: NextPage = () => {
  const [status, setStatus] = useState<string>("circle");

  const rewards = Array(12)
    .fill(null)
    .map((_, i) => i + 1);

  const startRotation = () => {
    setStatus("circle start-rotate");
    setTimeout(() => {
      setStatus("circle start-rotate stop-rotate");
    }, Math.floor(Math.random() * 10000) + 1);
  };

  return (
    <div>
      <div className="arrow"></div>
      <ul className={`${status}`}>
        {rewards.map((reward) => {
          return (
            <li key={reward}>
              <div className="text" spellCheck="false">
                {reward}
              </div>
            </li>
          );
        })}
      </ul>
      <button className="spin-btn" onClick={startRotation}>
        SPIN
      </button>
    </div>
  );
};

export default Home;
