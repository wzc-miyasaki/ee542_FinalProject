import React, { useState, useEffect } from 'react';
import './App.css';
import ChatButton from './ChatButton'; // 调整路径以匹配您的文件结构
import generateRandomArrays from './getScore'
function App() {
  const [image, setImage] = useState(null);
  const [scores, setScores] = useState(Array(6).fill(''));
  const [windSpeed, setWindSpeed] = useState(0);
  const handleScoreChange = (index, value) => {
    const newScores = [...scores];
    newScores[index] = value;
    setScores(newScores);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // 这里是获取风速的逻辑，目前使用随机数模拟
      const newWindSpeed = Math.round((Math.random() * 100) % 10);
      setWindSpeed(newWindSpeed);
    }, 1000); // 每10秒更新一次

    return () => clearInterval(interval); // 清除定时器
  }, []);

  const updateWindSpeed = () => {
    // 假设这里我们随机生成一个风速值
    const newWindSpeed = Math.round(Math.random() * 100);
    setWindSpeed(5);
  };
  

  const submitScores = () => {
    console.log('Submitted Scores:', scores);
    alert('scores submitted.');
    // 这里添加提交分数的逻辑
  };

  const fetchImage = () => {
    console.log('Fetching image...');
    setImage('/target.jpeg');
    alert('Loading Image: Please wait...');
    // 这里添加获取图片的逻辑
  };



  return (
    <div className="App">
      <div className="top-bar">Range Helper</div>
      <div className="content">
        <div className="image-box">
          {image ? <img src={image} alt="Display" /> : 'No image'}
        </div>
        <div className="score-form">
          {scores.map((score, index) => (
            <input
              key={index}
              type="number"
              value={score}
              onChange={(e) => handleScoreChange(index, e.target.value)}
              placeholder={`Score ${index + 1}`}
            />
          ))}
          <button onClick={submitScores}>Submit score</button>
          <button onClick={fetchImage}>fectch the image</button>
        </div>
        <div className="wind-speed-box">
        wind speed: {windSpeed} km/h
        </div>
        
        
      </div>
      <div>
          <ChatButton />
        </div>
    </div>
  );
}

export default App;
