import React from 'react';
import './menu-item.styles.scss';
import MediaQuery from 'react-responsive';
import { useNavigate } from "react-router";
import rape from '../../asset/rape.mp4'

function MenuItem({ title, imageUrl, size, history, linkUrl }) {
    let navigate = useNavigate();

    return (
        <div className={`${size} menu-item`}
            onClick={() => navigate(linkUrl)}>
            {/* <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} /> */}
            <video className='videoTag' autoPlay loop style={{ width: '1200px' }}>
                <source src={rape} type='video/mp4' />
            </video>
            <div className='content' >
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>FUCK NOW</span>
            </div>

        </div>

    )
};

export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const history = useNavigate();
        return <Component history={history} {...props} />;
    };
    return Wrapper;
};

export default MenuItem;