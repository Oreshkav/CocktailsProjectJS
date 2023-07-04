import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TelegramBot(): JSX.Element {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  // const [cocktailId, setCocktailId] = useState('');
  const { cocktailID } = useParams();

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const url = `https://api.telegram.org/bot6048260124:AAGrOe3yAOhb6yNOcYY-UHx3DuBXioKlmhs/sendMessage`; // Замени  на токен твоего бота
      const text = `Имя: ${name}\nСообщение: ${cocktailID}\nQuantity: ${quantity}`;
      const response = await axios.post(url, {
        chat_id: '448280832', // Замени  на ID твоего чата с ботом
        text: text,
      });
      if (response.status === 200) {
        alert('Your order have sent in Telegram. Wait for your coctail in 5-10 minute.');
        setName('');
        // setEmail('');
        setQuantity('');
        // setCocktailId('');
      } else {
        throw new Error('Произошла ошибка при отправке сообщения в Telegram.');
      }
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.');
    }
  };

  return (
    <div className="container">

      <div className="content">
        <div className="right-side">

          {/* Заголовок для формы */}
          <div className="topic-text">Order cocktails</div>
          {/* Форма обратной связи */}
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name='cocktailId'
                placeholder="ID coctails"
                value={cocktailID}
                // onChange={(event) => setCocktailId(event.target.value)}
                required
              ></input>
            </div>
            <div className="input-box">
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <input type="text"
                placeholder="Quantity of cocktails"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </div>
            <div className="button">
              <input type="submit" value="Send order" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default TelegramBot;
