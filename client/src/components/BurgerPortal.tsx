import React, { useState, useEffect } from 'react';
import NavPortal from './NavPortal'; // Asegúrate de importar el componente Nav

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggleMenu }) => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth >= 769);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 769);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    toggleMenu(); // Llamar a la función toggleMenu de las props
  };

  return (
    <div className="burger-menu-wrapper">
      {!isWideScreen && (
        <div className={`burger-button ${isOpen ? 'open' : ''}`} onClick={handleToggleMenu}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      )}
      <nav className={`menu ${!isWideScreen && isOpen ? 'open' : ''}`}>
        <NavPortal />
      </nav>
      {isWideScreen && <NavPortal />} {/* Renderizar el componente Nav normalmente si es una pantalla ancha */}
    </div>
  );
};

export default BurgerMenu;







