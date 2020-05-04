import React from "react";
import { connect } from "react-redux";
import { searchValueAction } from "../../store/actions/articlesActions";

const Search = ({ articles, onChangeSearchValue, searchValue }) => {
  console.log(searchValue);
  return (
    <div style={{marginBottom:30}}>
      <input
        style={{ width: 500 }}
        placeholder="Search for medicinal products..."
        type="text"
        value={searchValue || ""}
        onChange={onChangeSearchValue}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onChangeSearchValue: searchValue => {
    dispatch(searchValueAction(searchValue.target.value));
  },
});

export default connect(null, mapDispatchToProps)(Search);
