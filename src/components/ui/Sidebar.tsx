'use client'
import { sidebarItems } from '@/constants/sidebarItems';
import { USER_ROLE } from '@/constants/role';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { getUserInfo } from '@/redux/services/authService';
import turfMgmt from '../../../public/turf-mgmt-.png'
import Image from 'next/image';
const { Header, Content, Footer, Sider } = Layout;


const SidebarPage = () => {
  const userRole = getUserInfo()

  // let role = USER_ROLE.SUPER_ADMIN
  // const role = USER_ROLE.USER

  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor:'#09181D'
        
      }}
    >
      <div
        className='min-h-10 py-3'
        style={{
          color: 'white',
          fontSize: '1rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}
      >
        {
          collapsed ? <Image src={turfMgmt} alt='No Image' width={400} height={400}/> : 'Turf-Management'
        }
        
      </div>
      <Menu
        // theme='dark'
        theme='light'
        defaultSelectedKeys={['1']}
        mode='inline'
        items={sidebarItems(userRole)}
      />
    </Sider>


  )
}

export default SidebarPage