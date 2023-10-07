import React from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () => {

    const handleLogout = ()=>{
        console.log("logout")
        handleClose()
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <svg height="30" width="30" viewBox="0 0 24 24" aria-hidden="true"
                        class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs 
                        r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M18.244 2.25h3.308l-7.227 8.26 
                        8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 
                        6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
                <div className='space-y-6'>
                    {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 items-center'
                        onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}
                    >
                        {item.icon}
                        <p className='text-xl'>{item.title}</p>
                    </div>)}
                </div>
                <div className='py-10'>

                    <Button sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#1e88e5" }}
                        variant='contained'
                    >
                        Tweet
                    </Button>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <Avatar alt='username' src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/273876435_684682269377301_3145063648183618090_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_ohc=luydAKwtbFkAX-QQzgM&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfBvIz6sOST7pXDTGT0RB9BMjDFBqtgaeOEfeyy7nAt96g&oe=6524251B' />
                        <div>
                            <span>Lê Ngọc Yến Anh</span>
                            <span className='opacity-70'>@lnyenanh</span>
                        </div>

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
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navigation