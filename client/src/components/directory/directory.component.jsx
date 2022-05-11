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
                    linkUrl: 'sneakers/nike',
                },
                {
                    title: '柏木由紀',
                    imageUrl: Yuki,
                    id: 2,
                    linkUrl: 'sneakers/adidas',

                },
                // {
                //     title: '渡辺美優紀',
                //     imageUrl: Miyuki,
                //     id: 2,
                //     linkUrl: 'girls/渡辺美優紀',
                //     video: yukicm

                // }
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