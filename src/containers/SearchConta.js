import { connect } from "react-redux";

import SearchCompo from "../components/SearchCompo";

import { getUrls } from "../actions/";

const mapDispatchToProps = (dispatch) => {
  return {
    getUrls: (word) => {
      dispatch(getUrls(word));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchCompo);
