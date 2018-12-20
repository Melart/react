import React from "react";
import Avatar from 'react-avatar';
import "./user-component-style.css";


const PageUser = () => {
    return (
        <div className="page_header">
            <Avatar name='Ilia Melekhavets' size="40" round={true} />
            <div className="page_name">
                <h4>Ilia Melekhavets</h4>
                <p>
                    <span>Minsk, </span>
                    <span>Belarus</span>
                </p>
            </div>
        </div>
    )
}
export default PageUser;