
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import TwitterLogo from '../assets/blue-logo.png'
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

const leftBarWrapper = css`
    position:absolute;
    background-color:rgb(0,0,0);
    width:25vw;
    height:100vh;
    top:0;
`
const innerLeftBar = css`
    box-sizing: border-box;
    height:100%;
    overflow:scroll;
    margin-top:2vh;
`
const logoSizer = css`
    width:2.5vw;
`
const rowContents = css`
    height:100%;
    font-size:1.3rem;
    text-align:left;
    width:60%;
    color:rgb(231, 233, 234);
    margin:auto;
    `
const innerContents = css`
    box-sizing: border-box;
    display:flex;
    height:5%;
    line-height:100%;
    background-color:rgb(29, 155, 240);
    width:100%;
    padding-left:10%
`
const iconStyle = css`
    margin-right:10%;
    display: inline-flex;
    vertical-align: middle;
`
const buttonTheme = css`
    width:80%;
    background-color:rgb(29, 155, 240);
    border-radius: 100px;
    height:7vh;
    line-height:7vh;
    font-size:1.2rem;
    text-align:center;
    font-weight:bolder

`
function ContentRows(props: any) {
    const contents = props.contents
    return (
        <div css={rowContents}>
            {
                contents.map((content: any) => (
                    <p key={content.text} css={innerContents}>
                        <span css={iconStyle}>
                            {content.icon}
                        </span>
                        <span>
                            {content.text}
                        </span>
                    </p>
                )
                )}
            <div css={buttonTheme}>
                Tweet
            </div>
        </div>
    );
}
const contentsList = [
    {
        text: 'HOME',
        icon: <HomeIcon />
    },
    {
        text: 'Explore',
        icon: <TagOutlinedIcon />
    },
    {
        text: 'Notification',
        icon: <NotificationsOutlinedIcon />
    },
    {
        text: 'Messages',
        icon: <MarkunreadOutlinedIcon />
    },
    {
        text: 'Bookmarks',
        icon: <BookmarkBorderOutlinedIcon />
    },
    {
        text: 'Twitter Bule',
        icon: <VerifiedOutlinedIcon />
    },
    {
        text: 'Profile',
        icon: <PersonOutlineOutlinedIcon />
    },
    {
        text: 'More',
        icon: <MoreHorizOutlinedIcon />
    }
]
function LeftBar() {
    return (
        <div css={leftBarWrapper}>
            <div css={innerLeftBar}>
                <img css={logoSizer} src={TwitterLogo} alt="twitter-logo" />
                <ContentRows
                    contents={contentsList}
                />
            </div>
        </div>

    );
}

export default LeftBar;