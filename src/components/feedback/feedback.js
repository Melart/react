import React from "react";
import "./feedback-style.css";

class PageFeedback extends React.Component {
    render() {
        return (
            <div className="page_input">
                <input 
                    placeholder="Напишите комментарий..." 
                    type="text"
                    // value={}
                    // onChange={ev => {
                    //     this.setState({newItemReview: ev.target.value})
                    // }}
                    onKeyUp={ev => {
                        if (ev.keyCode === 13) {
                            console.log(input.value)
                        }
                    }}
                />
            </div>
        )
    }
}

export default PageFeedback 