import React from 'react'
import ItemBasket from './ItemBasket'

const Basket = (props) => {
  return (
    <div>
      <div>
        {
          props.overlayProp.length>0?
          <div>
            {
              props.overlayProp.map(obj =>{
                return(
                 <ItemBasket
                 key={obj.id}
                 id={obj.id}
                 title={obj.title} 
                 price={obj.price}
                 img={obj.img}
                 deleteItems={props.deleteItems}
                 />
                )
              })
            }
            </div>

            :<h1 className='col-md-8 offset-md-2'
            style={{color:'white'}}>Корзина пуста</h1>

        }
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <p style={{color:'orange'}}>Итог</p>
            <p style={{color:'orange'}}>{props.totalPrice}</p>
            <button type='button' className='w-10 btn btn-lg btn-warning'>Купить</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket