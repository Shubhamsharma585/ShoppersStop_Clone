import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDatasByDept } from "../../Redux/Filters/actions";
import "./NavbarList.css";

export default function NavbarList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleDept = (e) => {
    dispatch(getDatasByDept(e));
    history.push(`/product?c=${e}`);
  };
  return (
    <div>
      <div className="list">
        <li className="drop_one">
          <span className="spanHover">BARGAINS</span>
          <div className="menu_experiment">
            <div className="menu_one bargain">
              <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Beauty</li>
                <li>Home Offers</li>
                <li>Other Offer</li>
                <li>All Offer Product</li>
              </ul>
              <ul>
                <li>WesternWear - upto 70% off</li>
                <li>Women EthnicWear upto 80% off</li>
                <li>Shoes - upto 80% off </li>
                <li>Dresses - upto 70% off</li>
                <li>Women's Handbags -Flat 40% off</li>
                <li>Women's footwear - upto 60% off</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/ha9/h27/15070684053534/Puma_menu_Banner-2020.jpg" />
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/he3/h37/16262418661406/Arcelia-Menu-Banner.jpg" />
              </ul>
            </div>
          </div>
        </li>

        <li className="drop_one">
          <span className="spanHover" onClick={() => handleDept("women")}>
            WOMEN
          </span>
          <div className="menu_experiment">
            <div className="menu_one women">
              <ul>
                <li>Indian wear</li>
                <li>Western wear</li>
                <li>Lingeries & Night Wear</li>
                <li>Footwear</li>
                <li>Women's Fragrances</li>
                <li>bag's & Wallets</li>
                <li>Watches</li>
                <li>Sunglasses</li>
                <li>Jewelry</li>
                <li>Travel</li>
              </ul>
              <ul>
                <li>All Indian Wear</li>
                <li>Kurtas, kurtis & tops</li>
                <li>kurtas </li>
                <li>All Bottom wear</li>
                <li>Leggings & churidars</li>
                <li>Palazzo & Salwars</li>
                <li>Pants</li>
                <li>Skirts</li>
              </ul>
              <ul>
                <li>Sarees & Blouses </li>
                <li> Blouses</li>
                <li>Saree </li>
                <li>Dupattas</li>
                <li>Scarf & Stoles</li>
                <li>Mask & PPE kits</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h7a/14873598296094/Stop-ethnicwear_menu_Banner-2020.jpg" />
              </ul>
            </div>
          </div>
        </li>
        <li className="drop_one ">
          <span className="spanHover" onClick={() => handleDept("kids")}>
            KIDS
          </span>
          <div className="menu_experiment">
            <div className="menu_one kids">
              <ul>
                <li>Boys</li>
                <li>Girls</li>
                <li>Infants</li>
                <li>Toys</li>
                <li>School Essential</li>
                <li>Footwear</li>
                <li>Watches</li>
                <li>Accessories</li>
                <li>KIDS</li>
              </ul>
              <ul>
                <li>All BOYS</li>
                <li>TopWear</li>
                <li>Shirts </li>
                <li>T-Shirts</li>
                <li>BottomWear</li>
                <li>Jeans</li>
                <li>Pants</li>
                <li>Trousers</li>
                <li>Vest</li>
                <li>Jackets</li>
                <li>SweatShirts</li>
              </ul>
              <ul>
                <li>IndianWear </li>
                <li> Nehru jackets</li>
                <li>Kurta </li>
                <li>Dhoti</li>
                <li>Suits & blazers</li>
                <li>Mask</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/hde/hb8/14520526143518/Menu_mothercare-20200225.jpg" />
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h0f/h8e/14803313623070/Menu_kidsmask_20190527.jpg" />
              </ul>
            </div>
          </div>
        </li>
        <li className="drop_one ">
          <span className="spanHover" onClick={() => handleDept("beauty")}>
            BEAUTY
          </span>
          <div className="menu_experiment">
            <div className="menu_one  beauty">
              <ul>
                <li>Make Up</li>
                <li>Skincare</li>
                <li>Bath & Body</li>
                <li>Nails</li>
                <li>Haircare</li>
                <li>Tools & Accessories</li>
                <li>Fragrances</li>
                <li>Grooming for Men</li>
                <li>Personal Hygiene</li>
              </ul>
              <ul>
                <li>All Make Up</li>
                <li>Face</li>
                <li>BB & CC Cream </li>
                <li>Blush</li>
                <li>Bronzer</li>
                <li>Compact</li>
                <li>Concealer</li>
                <li>Foundations</li>
                <li>Make Up Remover</li>
                <li>Primers</li>
                <li>Kits</li>
              </ul>
              <ul>
                <li>Eyebrows </li>
                <li> Kohls & Kajal</li>
                <li>Eye Shadow </li>
                <li>Eyeliner</li>
                <li>Lip Balm</li>
                <li>Lipstick</li>
                <li> Liquid Lipstick</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/he1/h3a/16262418726942/Arcelia-Menu-Banner.jpg" />
              </ul>
            </div>
          </div>
        </li>
        <li className="drop_one ">
          <span className="spanHover" onClick={() => handleDept("men")}>
            MEN
          </span>
          <div className="menu_experiment">
            <div className="menu_one men">
              <ul>
                <li>Clothing</li>
                <li>Accessories</li>
                <li>Footwears</li>
                <li>Sunglasses & Frames</li>
                <li>Watches</li>
                <li>Fragrances</li>
                <li>Grooming for Men</li>
                <li>Jewellery</li>
              </ul>
              <ul>
                <li>All Clothings</li>
                <li>T- Shirts & Polo</li>
                <li>Shirts</li>
                <li>Casual</li>
                <li>Formal</li>
                <li>Jeans</li>
                <li>Shorts</li>
                <li>Joggers</li>
              </ul>
              <ul>
                <li>Kurtas </li>
                <li> Kurta Set </li>
                <li>Nehru Jacket </li>
                <li>Mask</li>
                <li>Sweatshirt</li>
                <li>Boxers</li>
                <li>NightWear</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/hf5/h2b/14316881903646/Allen-solly_menu_Banner-2020.jpg" />
              </ul>
            </div>
          </div>
        </li>

        <li className="drop_one ">
          <span className="spanHover">HOMESHOP</span>
          <div className="menu_experiment">
            <div className="menu_one home">
              <ul>
                <li>Kitchen & Dining</li>
                <li>Decor</li>
                <li>Home Furniture</li>
                <li>Storage</li>
                <li>Smart Home</li>
                <li>Bath</li>
                <li>Bedding</li>
                <li>Furniture</li>
              </ul>
              <ul>
                <li>All Kitchen</li>
                <li>Bar & Drinkware</li>
                <li>Bar Games</li>
                <li>Tawa</li>
                <li>Pots & Pans</li>
                <li>Kadai</li>
                <li>Pressure Cooker</li>
                <li>Table</li>
              </ul>
              <ul>
                <li>Storage & Containers </li>
                <li> Tray </li>
                <li>Table Accessories </li>
                <li>Crockery</li>
                <li>Mugs & Cups</li>
                <li>Pots & Kettles</li>
                <li>Dinner</li>
                <li>Dinnerware</li>
                <li>Dinner Sets</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h27/h7e/14292469973022/Appliances_menu_Banner.jpg.jpg" />
              </ul>
            </div>
          </div>
        </li>
        <li className="drop_one ">
          <span className="spanHover">CROSSWORD</span>
          <div className="menu_experiment">
            <div className="menu_one  cross">
              <ul>
                <li>Book</li>
                <li>Electronics</li>
                <li>Footwears</li>
                <li>Stationery</li>
                <li>Toys</li>
                <li>School Essentials</li>
              </ul>
              <ul>
                <li>All Books</li>
                <li>Non Fiction</li>
                <li>Biography</li>
                <li>Business</li>
                <li>Cookery</li>
                <li>History</li>
                <li>Body Spirit</li>
                <li>Social Science</li>
              </ul>
              <ul>
                <li>Crime </li>
                <li> General </li>
                <li>Historical Fiction </li>
                <li>Mythological Fiction</li>
                <li>Quick Reads</li>
                <li>Classics</li>
                <li>Adult Fiction</li>
              </ul>
              <ul>
                <li>Children's Books </li>
                <li> Activity books </li>
                <li>Story Books </li>
                <li>Early Learning</li>
                <li>Indian Wisdom</li>
                <li>Hindi</li>
                <li>Marathi</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h22/h8d/11647078301726/menu-banner-crossword_twinkle.jpg" />
              </ul>
            </div>
          </div>
        </li>
        <li className="drop_one ">
          <span className="spanHover">BRAND</span>
          <div className="menu_experiment">
            <div className="menu_one  brand">
              <ul>
                <li>Brand of Shoppers Stop</li>
                <li>Luxury Brands</li>
                <li>Trending Brands</li>
                <li>Celeb Brands</li>
                <li>Just Launch Brands</li>
                <li>All brands</li>
              </ul>
              <ul>
                <li>See All</li>
                <li>HauteCurry</li>
                <li>Arcelia</li>
                <li>Stop</li>
                <li>Life</li>
                <li>Back To Earth</li>
                <li>Devon North</li>
                <li>Fern</li>
                <li>Ivy</li>
                <li>Harries</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/hf6/h2a/16262417874974/Arcelia-Menu-Banner.jpg" />
              </ul>
            </div>
          </div>
        </li>
        <li className="drop_one ">
          <span className="spanHover">GIFTS</span>
          <div className="menu_experiment">
            <div className="menu_one  gift">
              <ul>
                <li>Gifts For Her</li>
                <li>Gifts For Him</li>
                <li>Instant Gifting</li>
                <li>Intimate Gifting</li>
                <li>House Warming Gifts</li>
                <li>Wedding Gifts</li>
                <li>Luxury Gifts</li>
              </ul>
              <ul>
                <li>See All Gifts For Her</li>
                <li>Gift Under Rs.999</li>
                <li>Gifts Under Rs.1999</li>
                <li>Luxury Gifts</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h42/hb1/10032515383326/promotionBanner_Gifts_EGV_20170719.jpg" />
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h69/h90/10741873803294/promotionBanner_gifts-for-her_20180301.jpg" />
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h58/h8d/10741873737758/promotionBanner_gifts-for-him_20180301.jpg" />
              </ul>
            </div>
          </div>
        </li>
        <li className="drop_one ">
          <span className="spanHover">DISCOVER</span>
          <div className="menu_experiment">
            <div className="menu_one kids discover">
              <ul>
                <li>First Citizen</li>
                <li>Style Hub</li>
                <li>Buying Guide</li>
                <li>Personal Shopper Service</li>
                <li>Express Store Pick Up</li>
              </ul>
              <ul>
                <li>Become A Member </li>
                <li>Link Your Card</li>
                <li>First Citizen Benefits</li>
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h7a/h2e/12667275313182/Menu-hover_Fc_20190426.jpg" />
              </ul>
              <ul>
                <img src="https://sslimages.shoppersstop.com/sys-master/root/h28/hf6/11669171339294/promotionBanner_personalshoppers_20180522.jpg" />
              </ul>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
}
