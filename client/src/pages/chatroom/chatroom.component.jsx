import { Button } from '@mui/material';
import { useContext, useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { CategoriesContext } from '../../contexts/categories.context';
import { selectCurrentCategories } from '../../store/categories/categories.selector';
import webSocket from 'socket.io-client'


const Chatroom = () => {
  const [ws, setWs] = useState(null)

  const connectWebSocket = () => {
    //開啟
    setWs(webSocket('http://localhost:4002'))
  }

  useEffect(() => {
    if (ws) {
      //連線成功在 console 中打印訊息
      console.log('success connect!')
      //設定監聽
      initWebSocket()
    }
  }, [ws])

  const initWebSocket = () => {
    //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
    ws.on('getMessage', message => {
      console.log(message)
    })
    ws.on('getMessageAll', message => {
      console.log(message)
    })
    ws.on('getMessageLess', message => {
      console.log(message)
    })
  }

  const sendMessage = (name) => {
    ws.emit(name, '收到訊息囉！')
  }


  return (
    <div className='chatroom-page'>
      <input key='4e4e4' type='button' value='連線' onClick={connectWebSocket} />
      <input key='drdr' type='button' value='送出訊息，只有自己收到回傳' onClick={() => { sendMessage('getMessage') }} />
    </div>
  )
};

export default Chatroom;
