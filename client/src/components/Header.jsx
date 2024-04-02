import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import Nav from "./Nav";



export const Header = () => {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  
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