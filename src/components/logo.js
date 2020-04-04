import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Logo = ({ siteTitle }) => (
  <Link to="/">
    <div>
      Jacob
    </div>
    <div>
      Lapworth
     </div>
  </ Link>
)

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: ``,
}

export default Logo