"use client";
import React, { useState } from "react";
import "./EmotionAnalyzer.css";

function EmotionAnalyzer() {
  const TONE_API_KEY = process.env.NEXT_PUBLIC_TONE_API_KEY;
  const [analysis, setAnalysis] = useState("");
  const [text, setText] = useState("");

  const EMOTIONS = {
    JOY: "joy",
    SURPRISE: "surprise",
    FEAR: "fear",
    ANGER: "anger",
    SADNESS: "sadness",
    LOVE: "love",
  };

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/finiteautomata/bertweet-base-emotion-analysis",
      {
        headers: {
          Authorization: `Bearer ${TONE_API_KEY}`,
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  function analyzeText(e) {
    e.preventDefault();
    query({ inputs: text }).then((response) => {
      console.log(JSON.stringify(response));
      setAnalysis(JSON.stringify(response));
    });
  }

  return (
    <form className="analyzer" onSubmit={analyzeText}>
      <label> Emotion Analyzer </label>
      <br></br>
      <textarea
        className="text-box"
        rows={6}
        cols={50}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <br></br>
      <button className="submit-button" type="submit">
        Analyze
      </button>
      <h1> Detected emotion: {analysis} </h1>
    </form>
  );
}

export default EmotionAnalyzer;
