import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

function HomePage(history) {
    return (
        <div className='homepage'>
            <h1>君を犯したい</h1>
            <Directory history={history} />
        </div>
    )
}

export default HomePage;

