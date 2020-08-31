import React from 'react';
import { removeItem } from '../actions/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

const Cart = () => {
    const addedItemsList = useSelector(state => state.addedItems);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();

    //to remove the item completely
    const handleRemove = (id) => {
        dispatch(removeItem(id));
    }

    let addedItems = addedItemsList.length ?
        (
            addedItemsList.map(item => {
                return (

                    <div className="collection-item avatar" key={item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.img} className="" />
                        </div>
                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price} Rs</b></p>
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                            <Button variant="contained" color="primary" onClick={() => { handleRemove(item.id) }}>Remove</Button>
                        </div>
                    </div>

                )
            })
        ) :

        (
            <p>Nothing.</p>
        )
    return (
        <div className="container">
            <div className="cart" >
                <h5>You have ordered:</h5>
                <div className="collection" >
                    {addedItems}
                </div>
                <div className='total-amount'>
                    Total Amount : {total} Rs
                </div>
            </div>
        </div>
    )
}

export default Cart;