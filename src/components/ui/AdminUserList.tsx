'use client'
import { useAllUserQuery } from '@/redux/api/authApi'
import { Button, Table } from 'antd'
import { useEffect, useState } from 'react'

interface UserMeta {
    page: number;
    limit: number;
    total: number;
}

interface UserData {
   
}

interface AllUserState {
    meta: UserMeta;
    data: UserData[]
}


const AdminUserListTable = () => {
    const query: Record<string, any> = {}
    const [allUser, setAllUser] = useState<AllUserState>({ meta: { page: 1, limit: 10, total: 0 }, data: [] })
    const [size, setSize] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const [sortBy, setSortBy] = useState<string>("")
    const [sortOrder, setSortOrder] = useState<string>("")
    query['limit'] = size;
    query['page'] = page
    query['sortBy'] = sortBy
    query['sortOrder'] = sortOrder

    const { data: users, isLoading } = useAllUserQuery({ ...query })

    useEffect(() => {
        if (!isLoading) {
            setAllUser(users?.data)
        }
    }, [isLoading, users?.data])


   
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location'
        },
        {
            title: 'ContactNo',
            dataIndex: 'contactNo',
            key: 'contactNo'
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role'
        },
        {
            title: 'Action',
            render: function (data: any) {
                return (
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                        <Button onClick={() => {
                            if (data && data.role === 'SUPER_ADMIN') {
                                alert('not permitted')
                            } else {
                                console.log(data)
                            }
                        }} className='disabled:opacity-50' type='primary'>update</Button>
                        <Button type="primary" danger>delete</Button>
                    </div>
                )
            }
        }
    ]

    const onPageSizeChange = (page: number, pageSise: number) => {
        console.log(page, pageSise)
        setPage(page)
        setSize(pageSise)
    }

    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter
        setSortBy(field as string)
        setSortOrder(order === 'ascend' ? 'asc' : 'desc')
    }
    const paginationConfig = {
        pageSize: 5,
        total: allUser.meta.total,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: true,
        onChange: onPageSizeChange
    }
    return <Table
        loading={isLoading}
        rowKey='id'
        dataSource={allUser.data}
        columns={columns}
        pagination={paginationConfig}
    />
}

export default AdminUserListTable