import React from "react";
import propTypes, { InferProps } from "prop-types";
import { withRouter } from "next/router";

const aboutPropTypes = {
  router: propTypes.shape({
    query: propTypes.shape({
      qs: propTypes.string
    }).isRequired
  }).isRequired
};
type AboutProps = InferProps<typeof aboutPropTypes>;

function About({ router }: AboutProps): object {
  const { qs } = router.query;

  return (
    <>
      <h2>Page using next/router</h2>
      <p>Query string: {qs}</p>
    </>
  );
}

export default withRouter(About as React.FC);
