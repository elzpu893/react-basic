import React, { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createItemAction, getAllItems } from "../actions/Prodcut_Action";
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
  const dispatch = useDispatch() 
  let history = useHistory();

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState(0)
  const [productQty, setProductQty] = useState(0)

  const _prod_01 = useSelector(state => state._prod_01)
  const { productLoading, productError, productList, actionStatus} = _prod_01

  const handleGetProducts = (e) => {
    e.preventDefault()
    dispatch(getAllItems())
  }

  const handleCreteProducts = (e) => {
    const data = {
      uuid:         uuidv4(),
      product_id:   uuidv4(),
      product_name: productName,
      price:        productPrice,
      qty:          productQty, 
      status:       'ACTIVE',
    }
    e.preventDefault()
    dispatch(createItemAction(data))
  }

  return (
    <Container>
      <Row className='pt-4'>
        <Col sm={12} md={12} lg={12} xl={12}>
          <h1>Hey Gayan</h1>
        </Col>
      </Row>

      <Row className='pt-4'>
        <Col sm={12} md={12} lg={12} xl={12}>
          <h3>Add Products</h3>
        </Col>
      </Row>

      <Row className='pt-4'>
        <Col sm={4} md={4} lg={4} xl={4}>
          <div>Product Name</div>
        </Col>
        <Col sm={8} md={8} lg={8} xl={8}>
          <input  type='text' 
                  value={productName} 
                  onChange={(e) => (setProductName(e.target.value))} ></input>
        </Col>
      </Row>
      <Row className='pt-4'>
        <Col sm={4} md={4} lg={4} xl={4}>
          <div>Product Price</div>
        </Col>
        <Col sm={8} md={8} lg={8} xl={8}>
          <input  type='number' 
                  value={productPrice} 
                  onChange={(e) => (setProductPrice(e.target.value))} ></input>
        </Col>
      </Row>
      <Row className='pt-4'>
        <Col sm={4} md={4} lg={4} xl={4}>
          <div>Product Quantity</div>
        </Col>
        <Col sm={8} md={8} lg={8} xl={8}>
          <input  type='number' 
                  value={productQty} 
                  onChange={(e) => (setProductQty(e.target.value))} ></input>
        </Col>
      </Row>



      <Row className='pt-4'>
        <Col sm={12} md={12} lg={12} xl={12}>
          <div className="my-button" onClick={(e) => handleCreteProducts(e)}>Add product</div>
        </Col>
      </Row>


      <Row className='pt-4'>
        <Col sm={12} md={12} lg={12} xl={12}>
          <h3>Products</h3>
          <div className="my-button" onClick={(e) => handleGetProducts(e)}>Show products</div>
        </Col>
      </Row>
      
      {productList && productList.map((item, index) => (
        <Row className='pt-4'  key={index}>
          {/* <Col sm={2} md={2} lg={2} xl={2}>{item.uuid}</Col> */}
          <Col sm={4} md={4} lg={4} xl={4}>{item.product_id}</Col>
          <Col sm={3} md={3} lg={3} xl={3}>{item.product_name}</Col>
          <Col sm={1} md={1} lg={1} xl={1}>{item.price}</Col>
          <Col sm={1} md={1} lg={1} xl={1}>{item.qty}</Col>
          <Col sm={7} md={1} lg={1} xl={7}>{item.status}</Col>
        </Row>
      ))}
      


    </Container>
  )
}

export default Home