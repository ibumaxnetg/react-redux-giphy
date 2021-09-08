import { connect } from "react-redux";

import imgListCompo from "../components/imgListCompo";

const mapStateToProps = (state) => {
  return {
    urlList: state.imgUrls
  };
};

export default connect(mapStateToProps, null)(imgListCompo);
