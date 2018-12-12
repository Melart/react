import React from "react";
import "./page.css";
import Users from "./users.json";
import PageUser from "../user/user-component";
import PageItem from "../item/item";
import PageFeedback from "../feedback/feedback";


export default class PageBlock extends React.Component {
    render() {
        return (<div className="page">
                    <div className="page_left"></div>
                    <div className="page_block">
                        <PageUser />
                        <div className="page_body">
                            <PageItem />
                            <PageItem />
                        </div>
                        <div className="page_footer">
                            <PageFeedback />
                        </div>
                    </div>
                </div>);    
    }  
}