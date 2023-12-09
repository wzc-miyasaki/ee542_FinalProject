import React, { useState, useEffect } from 'react';

function generateRandomArrays() {
    const arrays = [];
    for (let i = 0; i < 6; i++) {
      const array = [];
      for (let j = 0; j < 6; j++) {
        const randomNumber = Math.floor(Math.random() * 11); // 生成 0 到 10 之间的随机数
        array.push(randomNumber);
      }
      arrays.push(array);
    }
    return arrays;
  }
  

function RandomArraysComponent() {
  const [randomArrays, setRandomArrays] = useState([]);

  useEffect(() => {
    const arrays = generateRandomArrays();
    setRandomArrays(arrays);
  }, []);

  return (
    <div>
      {randomArrays.map((array, index) => (
        <div key={index}>
          {`Array ${index + 1}: [${array.join(', ')}]`}
        </div>
      ))}
    </div>
  );
}

export default RandomArraysComponent;
