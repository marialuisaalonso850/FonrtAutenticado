import React, { useState, useEffect } from 'react';
import Nav from './Nav'; // Asegúrate de importar el componente Nav

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 769);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 769);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-menu-wrapper">
      {!isWideScreen && (
        <div className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      )}
      <nav className={`menu ${!isWideScreen && isOpen ? 'open' : ''}`}>
        <Nav closeMenu={closeMenu} />
      </nav>
      {isWideScreen && <Nav />} {/* Renderizar el componente Nav normalmente si es una pantalla ancha */}
    </div>
  );
};

export default BurgerMenu;




