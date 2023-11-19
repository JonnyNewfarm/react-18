import React from "react";
interface Props {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: Props) => {
  return <nav className="navbar-nav">Navbar: {cartItemsCount}</nav>;
};

export default Navbar;
