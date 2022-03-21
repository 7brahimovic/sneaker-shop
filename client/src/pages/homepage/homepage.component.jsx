import React from 'react';

import Directory from'../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = ({history}) => (
    <div className='homepage'>
        <h1>君を犯したい</h1>
        <Directory history={history} />
    </div>
)

export default HomePage;