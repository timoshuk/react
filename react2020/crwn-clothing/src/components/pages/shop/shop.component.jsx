import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./shop.styles.scss";
import { fetchCollectionsStartAsync } from "../../../redux/shop/shop.actions";
import {
  selectCollectionFetching,
  selectCollectionsLoaded,
} from "../../../redux/shop/shop.selectors";
import WithSpiner from "../../with-spiner/with-spiner.component";

const CollectionsOverviewWithSpinner = WithSpiner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpiner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionsLoaded: selectCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
