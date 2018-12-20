import React from "react";
import ReactDom from "react-dom";
import "./style.css";
// import MainApp from "./components/app"
import UserName from "./components/page/users.json";
import PageItem from "./components/item/item";
import PageUser from "./components/user/user-component";


class MainApp extends React.Component {
  constructor() {
    super();

    this.state = {
      coments: [
        {firstName: "Петр", lastName: "Петров", text: "Очень доволен курсом. Спасибо, ребята за вашу работу! И так далее.. Сам напишешь что-нибудь", time: "15.12.2018"},
        {firstName: "Иван", lastName: "Иванов", text: "Очень доволен курсом. Спасибо, ребята за вашу работу! И так далее.. Сам напишешь что-нибудь", time: "17.12.2018"}
      ],
      newComent: ''
    }
  };
  
  addComent(value) {
    const coments = this.state.coments;
    const d = new Date();
    const dateToday = d.getDate();
    const monthToday = d.getMonth();
    const yearToday = d.getFullYear();

    const fullDate = () => {
      return (
        dateToday + '.' + monthToday + '.' + yearToday
      )
    }
    coments.push({
      firstName: UserName.firstName,
      lastName: UserName.lastName,
      text: this.state.newComent,
      time: fullDate()
    }),
    this.setState({
      coments,
      newComent: ''
    })
  }
  render() {
    return (
      <div className="page">
          <div className="page_left"></div>
          <div className="page_block">
              <PageUser />
              <div className="page_body">
              <div>
                  {
                    this.state.coments.map((coment, i) => {
                      return (
                        <PageItem 
                          key={i}
                          firstName={coment.firstName+" "}
                          lastName={coment.lastName+" "}
                          text={coment.text}
                          time={coment.time}

                        />
                      )
                    })
                  }
                </div>
              </div>
              <div className="page_footer">
                <input 
                  type="text"
                  placeholder="Напишите комментарий..."
                  value={this.state.newComent}
                  onChange={ev => {
                    this.setState({newComent: ev.target.value})
                  }}
                  onKeyUp={ev => {
                    if(ev.keyCode === 13) {
                      this.addComent()
                    }
                  }}
                />
                <button 
                  onClick={ev => {
                      ev.preventDefault;
                      this.state.coments.slice(3);
                      console.log(this.state.coments);
                  }}
                >
                Удалить
                </button>
              </div>
          </div>
      </div> 
    )
  }
}

ReactDom.render(
    <MainApp />,
    document.querySelector("#app")
);