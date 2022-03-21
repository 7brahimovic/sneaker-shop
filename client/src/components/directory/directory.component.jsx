import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import Miyuki from '../../image/1.jpg';
import Mai from '../../image/wallpaper.jpg';
import Sarii from '../../image/3.jpg';
import Rino from '../../image/4.jpg';
import Yuki from '../../image/5.jpg';


import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: '白石麻衣',
                    imageUrl: Mai,
                    id: 2,
                    linkUrl: 'girls'
                },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>

                {
                    this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} history={this.props.history}/>
                    )
                    )
                }
            </div>
        )
    }
}

export default Directory;