import { useContext, Fragment, useEffect, lazy, Suspense, useState } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import { Link } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { useSelector } from 'react-redux';
import { selectCurrentCategories } from '../../store/categories/categories.selector';
import apis from '../../api/api';
import Button from '@mui/material/Button';
import ws from '../../websocket/websocket'

const Artists = lazy(() => import('../../components/collection-item/collection-item.component'));


const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCurrentCategories)

  useEffect(async () => {
    console.log(categoriesMap)
  }, [])

  const [text, setText] = useState('');


  const textEvent = (event) => {
    setText(event.target.value)
  }

  const clickEvent = (event) => {
    console.log(
      'ww'
    )
    ws.send(text)
  }


  return (
    <Fragment>
      {/* <textarea id="txtShow" disabled></textarea>
      <input id="txtInput" onChange={textEvent} type="text" />
      <button id="btnSend" onClick={clickEvent}>送出</button> */}
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <div key={title}>
            <h2>

              <Button className='title' component={Link} to={title} variant="contained">
                {title.toUpperCase()}
              </Button>
            </h2>
            <div className='girl-page'>
              <div className='collection-preview'>

                {products
                  .filter((product, key) => key < 3)
                  .map((product) => (

                    <Suspense fallback={<div>Loading...</div>}>
                      <Artists key={product.id} collection={product} />
                    </Suspense>
                    // <CollectionItem key={product.id} collection={product} />
                  ))}
              </div>
            </div></div>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
