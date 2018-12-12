import React from "react";
import Avatar from 'react-avatar';
import Users from "../page/users.json";
import "./user-component-style.css";

export default class PageUser extends React.Component {
    render() {
        return (
            <div className="page_header">
                <Avatar name={Users.admin} size="40" round={true} />
                <div className="page_name">
                    <h4>{Users.admin}</h4>
                    <p>
                        <span>Minsk, </span>
                        <span>Belarus</span>
                    </p>
                </div>
            </div>
        )
    }
}