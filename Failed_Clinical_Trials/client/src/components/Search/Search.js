import React, { useState } from "react";
import {articlesSelector} from "../../selectors/articlesSelector";
import {articlesLoadingSelector} from "../../selectors/articlesLoadingSelector";
import {connect} from "react-redux";
import { searchValueAction } from '../../store/actions/articlesActions'
import {searchValueSelector} from "../../selectors/searchValueSelector";
const Search = ({ articles, onChangeSearchValue, searchValue }) => {

  return (
    <div>
      <form>
        <span>Search for medicinal products:</span>
        <input
          type="text"
          value={searchValue}
          onChange={onChangeSearchValue}
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    onChangeSearchValue: (searchValue) => {
        dispatch(searchValueAction(searchValue.target.value))
    },
});

export default connect(null, mapDispatchToProps)(Search);
