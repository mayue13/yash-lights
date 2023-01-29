import React from 'react';
import {BsTwitter,BsInstagram, BsFacebook, BsYoutube,BsWhatsapp,BsFillTelephoneFill} from 'react-icons/bs';

export default function SocialMedia (){

    return(
        <div className='app__social'>
            <div><a href='https://wa.me/917218141143' target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a></div>
            <div><a href='https://www.facebook.com/profile.php?id=100089752297389' target="_blank" rel="noopener noreferrer"><BsFacebook /></a></div>
            <div><a href='https://www.instagram.com/yash_lights_official' target="_blank" rel="noopener noreferrer"><BsInstagram/></a></div>
            <div><a href='https://www.youtube.com/channel/UCaWKYx6sU0ftLXVrtXupkiA' target="_blank" rel="noopener noreferrer"><BsYoutube/></a></div>
            <div><a href='tel:7218141143' target="_blank" rel="noopener noreferrer"><BsFillTelephoneFill/></a></div>
        </div>

    )

}