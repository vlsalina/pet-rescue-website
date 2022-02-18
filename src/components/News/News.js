import "./News.css";
import { recent } from "../../data";
import React from "react";
import { toggleNewsBackdrop } from "../../utils";

const News = () => {
  React.useEffect(() => {
    [0, 1, 2].forEach((x) => {
      toggleNewsBackdrop(x);
    });
  }, []);

  return (
    <section className="news">
      <header className="news__header">
        <h3>Recent News</h3>
      </header>
      <ul>
        {recent.map((news) => (
          <li key={news.title}>
            <article className="article">
              <div className="article__image">
                <img src={news.image} />
                <div className="article__backdrop" />
              </div>
              <div className="article--box-1">
                <time className="article__date text-styles-1">{news.date}</time>
                <div className="article__title">
                  <a href="#">{news.title}</a>
                </div>
                <summary className="article__story">{news.story}</summary>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;
