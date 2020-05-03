import React from "react";

const Article = ({ article }) => {
  return (
    <div>
      <section className="jumbotron" key={article._id}>
        <div className="Articles">{article.medicinalProduct}</div>
      </section>
    </div>
  );
};

export default Article;
