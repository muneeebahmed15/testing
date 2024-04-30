import { Button, Col, Drawer, FloatButton, Row, Space, Switch } from 'antd'
import React, { useState } from 'react'
import LeftSiderBar from './LeftSiderBar'
import ColorChanger from '../Hooks/ColorChanger'
import { CommentOutlined, CustomerServiceOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const Layout = () => {

  const [color, handleColorChanger] = ColorChanger();
  const [open, setOpen] = useState("false");
  const [openDrawer, setOpenDrawer] = useState(false);

  const onChange = (checked) => {
    setOpen(checked);
  };

  const showDrawer = () =>{
    setOpenDrawer(true)
  }

  const hideDrawer = () =>{
    setOpenDrawer(false)
  }

  return (
    <>
     <Row style={{minHeight:"100vh", color:`${color}`}}>
       <Col md={5} xs={0} className='border-end position-sticky'>
       <LeftSiderBar/>
       </Col> 

       <Col md={15} xs={24}>
        <div className='d-flex justify-content-between align-items-center
        border-bottom p-2 position-sticky d-md-none'>
       <div>
      { !openDrawer? ( <MenuUnfoldOutlined onClick={showDrawer}/>):
      ( <MenuFoldOutlined onClick={hideDrawer}/>) }
       </div>
    <h1>  Center</h1>
      <div>
        <h6>Update</h6>
      </div>
          </div>
          <div><h1>Content</h1></div>
       </Col> 


       <Col md={4} xs={0} className='border-start'>
      <h1> Right SiderBar</h1>
      <div>
      <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ right: 24 }}
      icon={<CustomerServiceOutlined />}>
    <input type="color" name='color' onChange={handleColorChanger} />
    </FloatButton.Group>
       </div>
       </Col> 
       
        </Row> 
        
<div>
<Drawer
        title='767 Drawer'
        placement="right"
        size="default"
        onClose={hideDrawer}
        open={openDrawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
</div>

    </>
  )
}

export default Layout
