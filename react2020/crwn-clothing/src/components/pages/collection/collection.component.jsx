import React from "react";
import { component, connect } from "react-redux";
import { selectCollection } from "../../../redux/shop/shop.selectors";
import CollectionItem from "../../collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
