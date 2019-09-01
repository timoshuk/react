import React from "react";
import { StarshipList } from "../sw-components";
import { withRouter } from "react-router-dom";

const StarshipsPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={itemId => {
        return history.push(`/starships/${itemId}`);
      }}
    />
  );
};

export default withRouter(StarshipsPage);
