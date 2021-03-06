import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Box, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";


export default function ItemDetail({ product }) {

    const [buttonCart, setButtonCart] = useState(false);
    const [quantity, setQuantity] = useState();

    const { addItem } = useContext(cartContext);

    function onAdd(count) {
        setQuantity(count)
        setButtonCart(true)
        addItem(product,count)
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="h1" color="initial">
                    {product.name}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} style={{ width: '100%' }}>
                    <img src={product.image} style={{ width: '800px', height: '800px' }}></img>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <h2>{"$" + product.price}</h2>
                        <p>{product.spec1}</p>
                        <p>{product.spec2}</p>
                        <p>{product.spec3}</p>
                        {buttonCart ?
                            <Box container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h3></h3>
                                <Button variant="outlined" color="success" size="small">
                                    <Link to={"/cart"} style={{ textDecoration: 'none', color: '#2e7d32' }}>
                                        Finalizar compra
                                    </Link>
                                </Button>
                            </Box>
                            :
                            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}