import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

/*const AppLink = ({ to, children }) => ({
    render: () => (
            <Link to={to} activeClassName="active">
                {children}
            </Link>
        )
})*/// старая версия

const AppLink = (props: { to: string, children: React.ReactNode }) => ({
    render: () => (
        <Link {...props} className="active" />
        // новая версия
        // более универсальна и деструктуризирует все передаваемые
        // пропсы внутрь себя
    )
})

class Routing extends React.Component {
  render() {
      return (
      <Router>
        <nav>
           // @ts-ignore
          <AppLink to="/">Home</AppLink>
          <Link to="/portfolio" className="active">Portfolio</Link>
          <Link to="/contacts" className="active">Contacts</Link>
          {/*// мы каждый раз повторяем имена классов
          // а это значит, что если мы решим поменять его
          // нам придется менять его вручную во всех 3-х местах
          // проще сделать это при помощи HOC
          // он будет оборачивать Link и задавать ей определенное имя класса
          */}
        </nav>
      </Router>
    );
  }
}

export default Routing;
