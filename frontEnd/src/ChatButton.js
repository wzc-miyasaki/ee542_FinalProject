import React, { useState } from 'react';
import axios from 'axios';

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

function ChatButton() {
  const [response, setResponse] = useState('');
  const randomArrays = generateRandomArrays()
  const handleClick = () => {
    if (randomArrays.length === 0) {
      console.log('No random arrays available');
      return;
    }


    const arrayContent = randomArrays.map(arr => arr.join(', ')).join(' | ');
    const content = `This is my 6 set archery trainning, can you find my weakness and give me future training plan?  ${arrayContent}`;

    axios.post('http://localhost:8080/openai-chat', {
      messages: [{ role: 'user', content: content }]
    })
    .then((res) => {
      setResponse(res.data);
      console.log('Response:', res.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Ask for Training plan</button>
      <div>
        {/* 检查 response 和 response.choices 是否存在，并渲染 content */}
        {response && response.choices && response.choices.length > 0
          ? response.choices[0].message.content
          : "Waiting for response..."
        }
      </div>
    </div>
  );
}

export default ChatButton;
