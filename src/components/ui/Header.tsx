import { AuthTokenKey } from '@/constants/tokenKey';
import { removeUserInfo } from '@/redux/services/authService';
import { Layout, Button } from 'antd';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Header: AntHeader } = Layout;
const Header = () => {
  const router = useRouter()
  const logOut = () => {
    removeUserInfo(AuthTokenKey)
    router.push('/login')
  }
  return (
    <AntHeader className='px-2' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center',backgroundColor:'#09181D' }}>
      <Button onClick={(()=>router.push('/'))} style={{marginRight:'20px'}}>Home</Button>
      <Button onClick={logOut} style={{ float: 'right' }}>Logout</Button>
      <ToastContainer />
    </AntHeader>
  )
}

export default Header