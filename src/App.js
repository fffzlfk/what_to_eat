import { useState } from 'react';
import "./App.css"
import {
  Button
} from '@mui/material';

const Foods = [
  "凉皮",
  "卤粉",
  "台湾卤肉饭",
  "咖喱饭",
  "嫩牛五方",
  "寿司",
  "新疆炒米粉",
  "日式拉面",
  "日式烧肉饭",
  "杀猪粉",
  "桥头排骨",
  "水煮肉片",
  "水饺",
  "汉堡薯条",
  "油炸烧烤",
  "浏阳蒸菜",
  "海南椰子鸡",
  "潮汕砂锅粥",
  "火锅",
  "火锅鸡",
  "炒粉",
  "炒饭",
  "烤冷面",
  "烤肉拌饭",
  "烧腊饭",
  "煎饺",
  "煎饼果子",
  "牛丼饭",
  "牛肉粉",
  "牛肉面",
  "猪肚鸡",
  "猪脚饭",
  "盖码饭",
  "肉夹馍",
  "肉汁拌饭",
  "肠粉",
  "臭豆腐",
  "葱油拌面",
  "蒸饺",
  "蛋包饭",
  "螺蛳粉",
  "辣椒炒肉",
  "过桥米线",
  "酸菜鱼",
  "重庆小面",
  "锅盔",
  "韩式炸鸡",
  "韩式烤肉",
  "韩式部队火锅",
  "馄饨",
  "鸭血粉丝",
  "麻婆豆腐",
  "麻辣烫",
  "麻辣香锅",
  "黄焖鸡",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const App = () => {
  const [food, setFood] = useState('什么');
  const [isStarted, setIsStarted] = useState(false);

  const handleClick = async () => {
      setIsStarted(true);
      for (let _ = 0; _ < 10; _++) {
          await new Promise(r => setTimeout(r, 200));
          const idx = getRandomInt(0, Foods.length);
          setFood(Foods[idx]);
      }
      setIsStarted(false);
  }

  return (
      <div className="container">
          <h1>今天吃{food}!</h1>
          {food !== '什么' && !isStarted && <img alt="" src={process.env.PUBLIC_URL + `/foods/${food}.jpg`} />}
          {!isStarted && <Button variant="contained" onClick={handleClick}>开始</Button>}
      </div>
  )
}

export default App;