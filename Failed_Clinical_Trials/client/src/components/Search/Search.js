import React from "react";
import { connect } from "react-redux";
import { searchValueAction } from "../../store/actions/articlesActions";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ articles, onChangeSearchValue, searchValue }) => {
  return (
    <div style={{marginBottom:30}}>
        <InputLabel htmlFor="input-with-icon-adornment">Search for medicinal products</InputLabel>
        <Input
            type="outlined"
            value={searchValue || ""}
            onChange={onChangeSearchValue}
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            }
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
