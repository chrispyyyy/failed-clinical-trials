import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getArticlesAsync } from "../../store/actions/articlesActions";
import "./Home.css";
import { articlesSelector } from "../../selectors/articlesSelector";
import { articlesLoadingSelector } from "../../selectors/articlesLoadingSelector";
import Articles from "../../components/Articles/Articles";
import Pagination from "../../components/Pagination/Pagination";
import { searchValueSelector } from "../../selectors/searchValueSelector";
import { filteredArticlesSelector } from "../../selectors/filteredArticlesSelector";

const Home = ({ articles, articlesLoading, searchValue, filteredArticles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticlesAsync());
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="container">
      <br />
      <div className="Header">
        <h1 style={{ display: "inline-block" }}>All Articles</h1>
      </div>
      <br />
      <div>
        <Articles
          articles={currentArticles}
          articlesLoading={articlesLoading}
          searchValue={searchValue}
          filteredArticles={filteredArticles}
        />
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  articles: articlesSelector(state),
  articlesLoading: articlesLoadingSelector(state),
  searchValue: searchValueSelector(state),
  filteredArticles: filteredArticlesSelector(state)
});

export default connect(mapStateToProps)(Home);
