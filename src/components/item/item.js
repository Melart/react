import React from "react";
import Users from "../page/users.json";
import "./item-style.css";


class PageItem extends React.Component {
    render() {
        return (
            <div className="page_item">
                <p>
                    <span>{Users.admin} </span> 
                    Очень доволен курсом. Спасибо, ребята за вашу работу! И так далее.. Сам напишешь что-нибудь
                </p>
                <div className="date">5.12.18</div>
            </div>
        )
    }
}
export default PageItem;