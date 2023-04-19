import React from 'react'
import './Footer.css'
import { GithubOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd';

export const Footer = () => {
  return (
    <footer>
        <div className='row'>
            <div className='col'>
                <h3 className='redes'>Redes sociales</h3>
                <Tooltip title="github">
                    <Button size='middle' target='_blank' shape="circle" icon={<GithubOutlined style={{fontSize:22}}/>} href="https://github.com/CVG42" />
                </Tooltip>
                <p className='creditos'>Hecho por Cristina Vera</p>
            </div>
        </div>
    </footer>
  )
}
