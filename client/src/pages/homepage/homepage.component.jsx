import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

function HomePage() {
    console.log(process.env.REACT_APP_WEATHER_API_KEY)

    return (
        <div className='homepage'>
            <Directory/>
        </div>
    )
}

export default HomePage;

