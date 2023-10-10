import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteOutlined } from '@mui/icons-material';
const TweetCard = () => {



    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteTweet = () => {
        console.log("delete tweet")
        handleClose();
    }

    const handleOpenReplyModel = ()=>{
        console.log("open model");
    }

    const handleCreateRetweet = ()=> {
        console.log("handle create retweet ")
    }


    const handleLiketweet = ()=>{
        console.log("handle like tweet ");
    }

    return (
        <div className=''>

            {/* <div className='flex items-center font-semibold text-gray-700 py-2 '>
            <RepeatIcon/>
            <p>Your ReTweet</p>
        </div> */}
            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate(`/profile/${6}`)}
                    className='cursor-pointer'
                    alt='username'
                    src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/236954275_574709193707943_83246847164485976_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=uLaQcTJoWBMAX_LwQNz&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfCN6Fl-EtPLARY9rEVN5-i70M9hENIsRjp1U5AHHq-yjA&oe=652A72FF' />
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Le Ngoc Yen Anh</span>
                            <span className='text-gray-600'>@lnyanh</span>
                            <img className='ml-2 w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="" />
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>

                            </Menu>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div onClick={()=>navigate(`/twit/${3}`)}
                            className='cursor-pointer'>
                            <p className='mb-2 p-0'>Fighting</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/318797718_885021966009996_1535236484124388055_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=cwqFs4c-LC0AX9cHW29&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfCTg_qFBf1JOAO7ZZy-zerdOnc605psK0K2_7zyBfrtiA&oe=652A2DF6" alt="" />
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-ponter' onClick={handleOpenReplyModel}/>
                                <p>20</p>
                            </div>
                            <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon 
                                    onClick={handleCreateRetweet}
                                    className='cursor-pointer'/>
                                    <p>20</p>
                            </div>
                            <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`}>
                                {true? <FavoriteIcon
                                    onClick={handleLiketweet}
                                    className='cursor-pointer'/>:<FavoriteOutlined
                                    onClick={handleLiketweet}
                                    className='cursor-pointer'/>}
                                    <p>20</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-ponter' onClick={handleOpenReplyModel}/>
                                <p>20</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-ponter' onClick={handleOpenReplyModel}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetCard