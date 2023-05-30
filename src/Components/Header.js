import { BarChart, SearchRounded, ShoppingCartRounded } from "@mui/icons-material";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(()=>{
    const toggleMenu = document.querySelector(".toggleMenu");
    toggleMenu.addEventListener('click', ()=>{
      document.querySelector('.rightMenu').classList.toggle('active');
    });
  },[]);
  return (
    <header>
      <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-react-bb7fe.appspot.com/o/images%2Flogo.png?alt=media&token=7737a292-b0b9-4ab0-ab84-5e653539eff2" alt="logo" className="logo" />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-react-bb7fe.appspot.com/o/images%2Fprofile.jpg?alt=media&token=82272fd5-257c-4cd5-8926-cd23dfe2ba6c" className="profilePic" alt="profilePic" />
        </div>
        <h2 className="userName">Ishrak</h2>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
};

export default Header;
