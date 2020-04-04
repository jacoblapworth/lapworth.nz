import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby"
import PropTypes from "prop-types"

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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
};

export const Example = () => (
  <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3].map(index => (
      <motion.li key={index} className="item" variants={item} />
    ))}
  </motion.ul>
);
