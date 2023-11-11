import { useAllOffersQuery } from '@/redux/api/offerApi'
import Link from 'next/link'
import { ReactNode, useEffect, useRef } from 'react'
import {useInView} from 'framer-motion'
import { SearchOutlined } from '@ant-design/icons';
import styles from '../../css/offer.module.css';
import React from 'react';
import { Button, Input, Select, Space } from 'antd';
import AOS from 'aos'
const OfferPage = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)
  
    useEffect(() => {
        AOS.init({
            delay:30,
            duration:400,
            easing:'ease-in-out',
            once:false,
            mirror:true,
            offset:120,
            debounceDelay:50,
            throttleDelay:99
        });
        AOS.refresh();
      }, [isInView]);
      const options = [
        {
            // value: 'zhejiang',
            // label: 'Zhejiang',
        },
        // {
        //     value: 'jiangsu',
        //     label: 'Jiangsu',
        // },
    ];
    const query: Record<string, any> = {}
    const { data: offers, isLoading, isError, error } = useAllOffersQuery({ ...query })
   
    const showOffers = (offers: any): ReactNode => {
        let array: any[] = []
     offers != undefined &&  offers?.data.map((item: any, index: number) => {
            array.push(
                <div key={index} className={`${styles.hoverItem} max-w-sm p-6 w-64 h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
                    <div data-aos="fade-up">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Turf : {item.turfId
}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location : Fields : {item.fieldId}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Game : {item.gameTypeId}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pay per hour : {item.price_per_hour} {'\u09f3'}</p>
                    <Link
                    href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Book
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>
                </div>
            )
        })
        return array
    }

    if (isLoading) {
        return (
            <div className="flex flex-col pt-10 justify-items-center justify-center ">
                <h1 className="text-center py-5 text-2xl font-bold text-gray-500">Book you slot here</h1>
                <div role="status" className="max-w-sm animate-pulse ">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }else if (offers === undefined) {
        return (
            <div className="flex flex-col pt-10 justify-items-center justify-center ">
                <h1 className="text-center py-5 text-2xl font-bold text-gray-500">Book you slot here</h1>
                <div role="status" className="max-w-sm animate-pulse ">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col pt-10 justify-items-center justify-center relative">
            <h1 ref={ref} data-aos="zoom-in" className="text-center py-5 text-2xl font-bold text-gray-500" >Book you slot here</h1>
            <Space className="my-6">
                <Space.Compact className="absolute inset-x-0 w-3/4 md:w-2/3  lg:w-1/2 mx-auto xl:w-1/3 xl:mr-10 top-24">
                    <Select className="text-lg" style={{ height: '40px' }} defaultValue="All criteria" options={options} />
                    <Input defaultValue="Search for available slot" style={{ height: '40px', width: '100%' }} />
                    <Button className="bg-blue-500 text-white text-lg" style={{ height: '40px' }}>Submit</Button>
                </Space.Compact>
            </Space>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 justify-items-center justify-center shadow-2xl mx-10 p-10 rounded-md">

                {
                    showOffers(offers)
                }
            </div>
        </div>
    )
}

export default OfferPage