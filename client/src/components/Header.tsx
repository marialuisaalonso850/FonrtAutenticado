import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

const Header: React.FC = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  

  return (
    <>
      <header className="principal">
        <div className="container-pri">
          <Link to="/" className="inicio">
            Parking<span className="span">Location.</span>{" "}
          </Link>
        </div>
        <BurgerMenu isOpen={isBurgerMenuOpen} toggleMenu={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)} />
      </header>
    </>
  );
};

export default Header;



