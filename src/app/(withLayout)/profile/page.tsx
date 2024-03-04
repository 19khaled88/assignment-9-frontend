'use client'
import { useUserProfileQuery } from "@/redux/api/authApi"
import { getUserInfo } from "@/redux/services/authService"
import PropagateLoader from "react-spinners/PropagateLoader";
import { userInfo } from "os"
import { useEffect, useState, CSSProperties } from "react"

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Profile = () => {
  const [info, setInfo] = useState({ id: '' })

  useEffect(() => {
    const userInfo = getUserInfo()
    if (userInfo !== null) {
      const { userId } = userInfo

      setInfo({
        'id': userInfo.userId
      })
    }
  }, [])
  const { data, isLoading } = useUserProfileQuery(info.id)
  
  if (isLoading) {
    return (
      <div className='w-full flex flex-row h-96 items-center justify-center'>
        <PropagateLoader color="#36d7b7" />
      </div>

    )
  }
  if (data === undefined) {
    return (
      <div className="w-196 h-96 flex justify-center items-center">
        <h1 className="flex  justify-center items-center h-100 w-full text-4xl">
          <PropagateLoader color="#36d7b7" cssOverride={override} />
        </h1>
      </div>
    )
  } else {

    return (
      <div className="w-196 h-96 flex justify-center ">
        <h1 className="flex items-center justify-center h-100 w-full text-6xl">Welcome, Mr./Mrs. {data.data.name}</h1>
      </div>
    )
  }


}

export default Profile