import React from 'react';
import { IoLogoFacebook, IoMdMail } from "react-icons/io";


export default ({social}) => (
    <div className="flex">
    {social.map(({url, icon}) => (
        url && icon ?
        <a key={`social${url}`} href={url} target="_blank" className="bg-gray-400 mx-1 rounded-full h-12 w-12 flex items-center justify-center">
            <Icon icon={icon} />
        </a>
        :
        <span key="socialnull"></span>
    ))}
    </div>

)

const Icon = ({icon}) => {
    const classes = "w-2/3 h-auto"
    switch(icon){
        case "facebook":
            return <IoLogoFacebook className={classes} />
        case "email":
            return <IoMdMail className={classes} />
        default:
            return <></>
    }
}