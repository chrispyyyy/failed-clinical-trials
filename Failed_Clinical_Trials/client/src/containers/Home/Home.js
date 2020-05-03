import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getArticlesAsync } from "../../store/actions/articlesActions";
import "./Home.css";
import { articlesSelector } from "../../selectors/articlesSelector";
import Loader from "react-loader-spinner";
import { articlesLoadingSelector } from "../../selectors/articlesLoadingSelector";

const Home = ({ articles, articlesLoading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesAsync());
  }, []);

  return (
    <div className="container">
      <br />
      <div className="Header">
        <h1 style={{ display: "inline-block" }}>All Articles</h1>
      </div>
      <br />
      <div>
        {articlesLoading && (
          <Loader
              style={{marginLeft:500}}
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={1000} //3 secs
          />
        )}
        {articles.length > 0 &&
          articles.map(article => {
            return (
              <section className="jumbotron">
                <div className="Articles">{article.medicinalProduct}</div>
              </section>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  articles: articlesSelector(state),
  articlesLoading: articlesLoadingSelector(state)
});

export default connect(mapStateToProps)(Home);
