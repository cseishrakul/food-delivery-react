import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import BannerName from "./Components/BannerName";
import Header from "./Components/Header";
import MenuCard from "./Components/MenuCard";
import MenuContainer from "./Components/MenuContainer";
import SubMenuContainer from "./Components/SubMenuContainer";
import { MenuItems, Items } from "./Components/Data";
import ItemCards from "./Components/ItemCards";
import DebitCard from "./Components/DebitCard";
import CartItems from "./Components/CartItems";
import { useStateValue } from "./Components/StateProvider";

function App() {
  // Main dish state
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );
  const [{ cart }, dispatch] = useStateValue();
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // MenuCard Active toggle
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart]);
  // Set Main Dish Items on Filter
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };
  return (
    <div className="App">
      {/* Header Section */}
      <Header />
      {/* Main Container */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Efaz"} discount={"20"} link={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-react-bb7fe.appspot.com/o/images%2Fdelivery.png?alt=media&token=12bbbe0c-3f1b-469f-8d10-d74084bcc6ee"
              alt="delivery"
              className="deliveryPic"
            />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div
                    className=""
                    key={data.id}
                    onClick={() => setData(data.itemId)}
                  >
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCards
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>

          {!cart ? (
            <div></div>
          ) : (
            <div className="cartCheckOutContainer">
              <SubMenuContainer name={"Carts Items"} />
              <div className="cartContainer">
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItems
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span>45.5
                </p>
              </div>
              <button className="checkout">Check Out</button>
            </div>
          )}
        </div>
      </main>
      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
