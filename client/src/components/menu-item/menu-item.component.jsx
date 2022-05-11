import React from 'react';
import './menu-item.styles.scss';
import { useNavigate } from "react-router";

function MenuItem({ title, imageUrl, linkUrl, video }) {
    let navigate = useNavigate();

    return (
        <div className={`menu-item`}
            onClick={() => navigate(linkUrl)}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            {/* <video className='videoTag' autoPlay loop style={{ width: '1200px' }}>
                <source src={video} type='video/mp4' />
            </video> */}
            <div className='content' >
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>BUY NOW</span>
            </div>

        </div>

    )
};

export default MenuItem;