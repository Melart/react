import React from "react";
import "./feedback-style.css";

export default class PageFeedback extends React.Component {
    render() {
        return (
            <div className="page_input">
                <input placeholder="Напишите комментарий..."></input>
            </div>
        )
    }
}