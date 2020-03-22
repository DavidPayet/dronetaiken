import React from 'react';
import { Link } from "react-scroll";
import { IoIosArrowDropup } from "react-icons/io";

import '../styles/BackToTopBtn.scss';

const BackToTopBtn = () => (
  <button type="button" title="Up Page" className="BackToTopBtn">
    <Link
      activeClass="active"
      to="up-page"
      spy={true}
      smooth={true}
      duration={500}
    >
      <IoIosArrowDropup className="rubberBand"/>
    </Link>
  </button>
);

export default BackToTopBtn;