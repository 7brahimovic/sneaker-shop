import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import Nike from '../../image/nike.jpeg';
import Adidas from '../../image/adidas.jpeg';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Nike',
                    imageUrl: Nike,
                    id: 2,
                    linkUrl: 'sneakers/nike',
                },
                {
                    title: 'Adidas',
                    imageUrl: Adidas,
                    id: 2,
                    linkUrl: 'sneakers/adidas',

                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>

                {
                    this.state.sections.map(({ title, imageUrl, id, video, linkUrl }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} video={video} history={this.props.history}/>
                    )
                    )
                }
            </div>
        )
    }
}

export default Directory;