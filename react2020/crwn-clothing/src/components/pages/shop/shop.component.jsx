import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionsSnapshoToMap,
} from "../../../firebase/firebase.utils";
import "./shop.styles.scss";
import { updateCollections } from "../../../redux/shop/shop.actions";

class ShopPage extends Component {
  unsubskribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshoToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
