import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Profile = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleOpenProfileModel = () => {
    console.log("open profile model")
  }

  const handleFollowUser = () => {
    console.log("follow user")
  }



  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
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
            src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/273876435_684682269377301_3145063648183618090_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=luydAKwtbFkAX-QQzgM&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfBvIz6sOST7pXDTGT0RB9BMjDFBqtgaeOEfeyy7nAt96g&oe=6524251B'
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
    </div>
  )
}

export default Profile