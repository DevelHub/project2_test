import * as React from 'react';
import PropTypes from 'prop-types';
import './itemStyles.css';
//import '../../../public/img/itemImages/Forever21dress2.jpg';

export class ItemImage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    randomNumber(max)
    {   
        return Math.floor(Math.random() * max) + 1;
    }

    render()
    {
        const purl = process.env.PUBLIC_URL;
        const numImages = 15;
        let src = this.props.src;
        const type = this.props.type;
        const gender = this.props.gender;

        if(!src)
        {
            //src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180";
            let snum = this.randomNumber(numImages);
            src = "/img/itemImages/"+gender+"/"+type+"/image"+snum+".jpg";
            console.log(src);
        }
        return (
            <div className="itemImage">
                <img className="image" src={purl + src}/>
            </div>
        )
    }
}