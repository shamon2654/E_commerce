import React, { useState } from "react"
import Header from "../components/Layout/Header"
import styles from "../styles/styles"
import ProfileSideBar from "../components/Profile/ProfileSideBar"
import ProfileContent from "../components/Profile/ProfileContent"
import Footer from "../components/Layout/Footer"

const ProfilePage = () => {
  const [active, setActive] = useState(1)
  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#fefcfc] py-10`}>
        <div className="w-[335px] ">
                  <ProfileSideBar active={active} setActive={setActive} />
                  
        </div>
        <ProfileContent active={active} />
        
      </div>
      <Footer/> 
    </div>
  )
}

export default ProfilePage
