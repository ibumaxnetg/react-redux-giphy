import { connect } from "react-redux";

import SearchCompo from "../components/SearchCompo";

import { getUrls } from "../actions/";

const mapStateToProps = (state) => {
  return {
    buttonTxt: state.buttonTxt
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUrls: (word) => {
      dispatch(getUrls(word));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCompo);
