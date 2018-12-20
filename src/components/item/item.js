import React from "react";
import "./item-style.css";


const PageItem = (props) => {
    return (
        <div className="page_item">
            <p>
                <span>{props.firstName}</span> 
                <span>{props.lastName}</span>
                 {props.text}
            </p>
            <div className='item_block'>
                <div className="date">{props.time}</div>
                <div>
                    <a >
                        Удалить</a>
                </div>
            </div>

        </div>
    )
}
export default PageItem;