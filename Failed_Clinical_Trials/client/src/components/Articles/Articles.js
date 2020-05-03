import React from "react";
import "./Article.css";
import Loader from "react-loader-spinner";

const Articles = ({ articles, articlesLoading }) => {
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
           {articles.length > 0 &&
           articles.map(article => {
               return (
                   <section className="jumbotron" key={article._id}>
                       <div className="Articles">{article.medicinalProduct}</div>
                   </section>
               );
           })}
       </div>
       )
};

export default Articles;
