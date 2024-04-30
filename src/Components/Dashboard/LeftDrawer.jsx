import React from 'react'

const LeftDrawer = () => {
  return (
    <>
     <div>
     <Space>
        <Button type="primary" onClick={showDefaultDrawer}>
          Open Default Size (378px)
        </Button>
        <Button type="primary" onClick={showLargeDrawer}>
          Open Large Size (736px)
        </Button>
      </Space>
        </div> 
    </>
  )
}

export default LeftDrawer
