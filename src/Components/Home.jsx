import React from 'react'
import logo from '../Assets/Images/logo.png'
import green_img from '../Assets/Images/green-lipped-dabba.png'
import StarIcon from '@mui/icons-material/Star';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FacebookOutlined, FacebookSharp, HorizontalRule } from '@mui/icons-material';

export default function Home() {
  return (
    <div className='home-container'>
      <div className="hero-section">
        <div className="logo">
          <img class="size-10" src={logo} alt="" />
        </div>
        <div className="heading">
          <h2>Green Lipped Mussel:</h2>
          <h3>nature's key to pain-free joints</h3>
        </div>
      </div>
      <div className="middle-section">
        <div className="paragraph-container">
          <p>Joint discomfort slowing you down? Green Lipped Mussel, unique to New Zealand, is packed with Omega-3s, Glysaminoglycans (GAG's), and Chondroitin Sulfate - essential for reducing inflammation, repairing caritage, supporting mobility.</p>
          <p>Unlike paikillers, which only mask the discomfort, Green Lipped Mussel works with you body to support long-term joint health-without unwanted side effects</p>
        </div>
      </div>
      <div className="green-lipped-mussle-ad-section">
        <div className="green-lipped-image">
          <img src={green_img} alt="" />
        </div>
        <div className="product-description">
          <div className="product-desc-text">
            <h3>Why Green Lipped Mussel?</h3>
            <div className="ul">
              <li><HorizontalRule/> Eases stiffness & improves flexibility</li>
              <li><HorizontalRule/> Repairs and rebuilds cartilage naturally</li>
              <li><HorizontalRule/> Provides powerful anti-inflammatory relief</li>
              <li><HorizontalRule/> Strengthens joints, ligaments & tendons</li>
              <li><HorizontalRule/> Backed by research & sourced from NZ's prestine waters</li>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-review-section">
        <div className="customer-review left">
          <div className="review-star">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <div className="review-text">
            <p>I was in so much pain before I got the Green Lipped Mussel. I don't think my knees would still be working if I don't have it! I am customer for life!</p>
            <p className="customer-name">-Dawn Harrell</p>
          </div>
        </div>
        <div className="customer-review right">
          <div className="review-star">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <div className="review-text">
            <p>I've been taking green lipped mussel for a month now. Slowly I can feel my knees allowing me more movement. Prior I couldn't get up without using both hands. Best product! I never want to run out!</p>
            <p className="customer-name">-Maria Biedermann</p>
          </div>
        </div>
      </div>
      <div className="products-container">
        <div className="products">
          <img src={green_img} alt="" />
          <p className="product-title">Green Lipped Mussel <br /> 30-60-90 Caps</p>
          <button className="shop-btn">SHOP NOW</button>
        </div>
        <div className="products">
          <img src={green_img} alt="" />
          <p className="product-title">Green Lipped Mussel 90 <br /> caps - Twin Pack Special</p>
          <button className="shop-btn">SHOP NOW</button>
        </div>
      </div>
      <div className="show-now-request-container">
        <p>Give your joints the support they</p>
        <p>See why so many trust deep blue health's Green</p>
        <p>Lipped mussel for long-lasting relief.</p>

        <button className="shop-now">
          SHOP NOW & FEEL THE DIFFERENCE
        </button>
      </div>
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="link-list">
          <p>BRAIN FUNCTION</p>
          <p>ENERGY</p>
          <p>IMMUNITY</p>
          <p>DIGESTION</p>
        </div>
        <div className="social-media">
          <div className="insta">
            <InstagramIcon />
          </div>
          <div className="meta">
            <FacebookSharp />
          </div>
        </div>
        <div className="copyright">
          <p>&#169; This is the brand name 2024 | This is the address of the brand</p>
          <p>If you would like to unsubscribe, click Unsubscribe</p>
        </div>
      </div>
    </div>
  )
}
