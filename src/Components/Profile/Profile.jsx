import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab, Tabs } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModal';
const Profile = () => {
  const handleTabChange = (event, newValue)=>{
    setTabValue(newValue)
    if (newValue === 4){
      console.log("likes twit")
    }
    else if (newValue ===1){
      console.log("users twits")
    }
  }
  const [openProfileModal, setOpenProfileModal]= useState(false)
  const handleOpenProfileModel = ()=> setOpenProfileModal(true)
  const handleClose = ()=> setOpenProfileModal(false)

  const [tabValue, setTabValue]=useState("1")
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  

  const handleFollowUser = () => {
    console.log("follow user")
  }



  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
        <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Huy ne</h1>
      </section>
      <section>
        <img
          className='w-[100%] h-[15rem] object-cover'
          src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/318855102_885021949343331_8458654844607040802_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_ohc=t3v6ufm5ONMAX8_4iQB&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfARmyKdB0BS1laU5dI5EMal_eOjHLYsEbqjAc4pwqdmHg&oe=6528292D" alt="" />
      </section>
      <section className='pl-6'>
        <div className='flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar
            className='transform -translate-y-24'
            alt='yen anh'
            src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/284281688_748422246336636_8130065382359478227_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_ohc=iWAbpX8wEjEAX8apAvO&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfC8n6PUN5Win4Ootj6mxyME01-Lj_NIU1buROGLIGIdMw&oe=652A185B'
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? <Button
            onClick={handleOpenProfileModel}
            variant='contained' sx={{ borderRadius: "20px" }}>Edit Profile</Button> : <Button
              onClick={handleFollowUser}
              variant='contained' sx={{ borderRadius: "20px" }}>{true ? "Follow" : "UnFollow"}</Button>}

        </div>
        <div>
          <div className='flex items-center'>
            <h1 className='font-bold text-lg'>Yen Anh</h1>
            {true &&
              (<img className='ml-2 w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="" />)}

          </div>
          <h1 className='text-gray-500'>@lnyanh</h1>
        </div>
        <div className='mt-2 space-y-3'>
          <p>Hi, Je m'appele YA</p>
          <div className='py-1 flex space-x-5'>
            <div className='flex items-center text -gray-500'>
              <BusinessCenterIcon />
              <p className='ml-2'>HUTECH</p>
            </div>
            <div className='flex items-center text -gray-500'>
              <LocationOnIcon />
              <p className='ml-2'>Vietnam</p>
            </div>
            <div className='flex items-center text -gray-500'>
              <CalendarMonthIcon />
              <p className='ml-2'>Joined June 2015</p>
            </div>
          </div>
          <div className='flex items-center space-x-5'>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>1</span>
              <span className='text-gray-500'>Following</span>
            </div>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>600</span>
              <span className='text-gray-500'>Followers</span>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />

              </TabList>
            </Box>
            <TabPanel value="1">
              {[1,1,1,1].map((item)=><TweetCard/>)}
            </TabPanel>
            <TabPanel value="2">user replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>

          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal}/>
      </section>
    </div>
  )
}

export default Profile