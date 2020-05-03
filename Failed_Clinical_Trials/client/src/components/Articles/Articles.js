import React from "react";
import "./Article.css";
import Loader from "react-loader-spinner";
import Article from "../Article/Article";
import Search from "../Search/Search";

const Articles = ({ articles, articlesLoading, searchValue }) => {
   if(articlesLoading) {
       return <div style={{ marginLeft: 500 }}>
           <Loader
               type="Puff"
               color="#00BFFF"
               height={100}
               width={100}
               timeout={2000} //3 secs
           />
       </div>
   }
   return (
       <div>
           <Search articles={articles} searchValue={searchValue}/>
           {articles.length > 0 &&
           articles.map(article => {
               return (
                   <Article article={article}/>
               );
           })}
       </div>
       )
};

export default Articles;
