import React from "react";
import { NavLink } from "react-router-dom";
import "./Main.css";

const Main = (props) => {
  return (
    <div className="main">
      <div className="container">
        <div className="main__inner">
          {/* <h1 className="main__logo">Про проект</h1> */}
          <section className="main__content">
            <div className="container">
              <article className="main__article article">
                <div className="article__img"></div>
                <div className="article__text"></div>
              </article>
              <article className="main__article article article-img_left">
                <div className="article__img"></div>
                <div className="article__text"></div>
              </article>
              <article className="main__article article">
                <div className="article__img"></div>
                <div className="article__text"></div>
              </article>
              <article className="main__article article">
                <div className="article__img"></div>
                <div className="article__text"></div>
              </article>
              <article className="main__article article">
                <div className="article__img"></div>
                <div className="article__text"></div>
              </article>
            </div>
          </section>
          <div className="main__footer">
            <NavLink to="/test" className="footer__button">
              перейти до тесту
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
