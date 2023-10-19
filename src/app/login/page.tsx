'use client'
import FormInput from '@/form/formInput'
import ReactForm from '@/form/hookForm'
import { Col, Row, Button } from 'antd'
import Image from 'next/image'
import { SubmitHandler } from "react-hook-form"
import SignInImage from '../../../public/Sign in.svg'
const LoginPage = () => {

    type FormValues = {
        id: string;
        password: string
    }
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Row style={{ width: '95%', height: '100vh', margin: 'auto' }}>
            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={2} sm={12} md={16} lg={16} xl={14}>
                <Image style={{}} src={SignInImage} alt='No Image' height={500} width={500} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', gap: '20px' }} xs={20} sm={12} md={8} lg={8} xl={10}>
                <h1>Sign In Form</h1>

                <ReactForm submitHandler={onSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div >
                            <FormInput  name='email' type='text' size='large' label='User Email' />
                            <FormInput name='Password' type='password' size='large' label='User Password' />
                        </div>
                        <Button style={{fontSize:'20px', height:'40px'}} type='primary' htmlType='submit'>
                            Login
                        </Button>
                    </div>
                </ReactForm>
                <div>
                    <h2>Don't have Account</h2>
                    <Button type='primary'>
                          Go Register
                    </Button>
                </div>

            </Col>
        </Row>
    )
}

export default LoginPage