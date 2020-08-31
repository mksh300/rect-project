import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions'
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from '@material-ui/core';
import {ToastsContainer, ToastsStore} from 'react-toasts';

const Home = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (item) => {
        dispatch(addToCart(item.id));
        ToastsStore.success("you just added a item to cart")
    }

    const goToCartPage = () => {
        history.push("/cart")  
    }

    const ListOfItems = useSelector(state => state.items);
    let itemList = ListOfItems.map(item => {
        return (
            <div className="card" key={item.id} >
                <div className="card-image">
                    <img src={item.img} alt={item.title}  className="image-max-width"/>
                    <span className="card-title">{item.title}</span>
                    <IconButton onClick={() => handleClick(item)}><AddCircleIcon/></IconButton>
                </div>
                <div >
                    <p>{item.desc}</p>
                    <p><b>Price: {item.price} Rs</b></p>
                </div>
            </div>
        )
    })

    return (
        <div >
            <h3 className="center">Our items</h3>
            <div  className='button-padding'>
                <Button  variant="contained" color="primary"  onClick={goToCartPage} >
                    Checkout
                </Button>
            </div>
            <div className="box">
                {itemList}
            </div>
            <ToastsContainer store={ToastsStore}/>
        </div>
    )
}
export default Home;