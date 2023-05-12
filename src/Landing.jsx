import React, { useState } from "react";
import logo from "./images/logo.svg";
import close from "./images/icon-close.svg";
import hamburger from "./images/icon-hamburger.svg";
import mockups from "./images/image-mockups.png";
import desk from "./images/bg-intro-desktop.svg";
import api from "./images/icon-api.svg";
import budgeting from "./images/icon-budgeting.svg";
import onboarding from "./images/icon-onboarding.svg";
import online from "./images/icon-online.svg";
import confetti from "./images/image-confetti.jpg";
import currency from "./images/image-currency.jpg";
import plane from "./images/image-plane.jpg";
import restaurant from "./images/image-restaurant.jpg";
const Landing = () => {
  const [shownav, setshownav] = useState(false);
  return (
    <div className="landing">
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </nav>
        {shownav === true ? (
          <img
            src={close}
            id="close"
            alt="close"
            onClick={() => (
              document
                .getElementsByTagName("nav")[0]
                .classList.remove("nav_open"),
              setshownav(false)
            )}
          />
        ) : (
          <img
            src={hamburger}
            id="open"
            onClick={() => (
              document.getElementsByTagName("nav")[0].classList.add("nav_open"),
              setshownav(true)
            )}
            alt="hamburger"
          />
        )}
        <button className="request_butt">Request Invite</button>
      </header>

      {/* *************************-Section 1-******************************************** */}
      <section className="section1">
        <div className="mockups_bg">
          <img src={desk} alt="" id="dd" />
          <img src={mockups} alt="mockups" />
        </div>
        <div className="mockups_descp">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing,and much
            more.
          </p>
          <button className="request_butt">Request Invite</button>
        </div>
      </section>
     

      {/* *************************-Section 2-******************************************** */}
      <section className="section2">
        <div className="why">
          <h1>Why choose Easybank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.{" "}
          </p>
        </div>
        <div className="reasons">
          <div className="reason">
            <img src={online} alt="" />
            <h1>Online Banking</h1>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances whatever you are in the world
            </p>
          </div>
          <div className="reason">
            <img src={budgeting} alt="" />
            <h1>Simple Budgeting</h1>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you're close to your hitting limits.
            </p>
          </div>
          <div className="reason">
            <img src={onboarding} alt="" />
            <h1>Fast Onboarding</h1>
            <p>
              We don't do branches. Open your account in minutes online and
              start taking control of finances right away.
            </p>
          </div>
          <div className="reason">
            <img src={api} alt="" />
            <h1>Open API</h1>
            <p>
              Manage your savings, investments, pension, and much more from one
              account.Tracking your money has never been easier
            </p>
          </div>
        </div>
      </section>
      

      {/* *************************-Articles-******************************************** */}
      <div className="section3-center">
      <section className="section3">
        
        <h1>Latest Articles</h1>
        <div className="articles">
          <div className="article">
            <img src={currency} alt="" />
            <div className="article_desc">
              <h5>By Claire Robinson</h5>
              <h2>Receive money in any currency with no fees</h2>
              <p>
                The world is getting smaller and we're becoming more mobile. So
                why should you be forced to only receive money in a single...
              </p>
            </div>
          </div>
          <div className="article">
            <img src={restaurant} alt="" />
            <div className="article_desc">
              <h5>By Wilson Hutton</h5>
              <h2>Treat yourself without worrying about money</h2>
              <p>
                Our simple budgeting feature allows you to sperate out your
                spending and set realistic limits each month. That means you...
              </p>
            </div>
          </div>
          <div className="article">
            <img src={plane} alt="" />
            <div className="article_desc">
              <h5>By Wilson Hutton</h5>
              <h2>Take your Easybank card wherever you go</h2>
              <p>
                We want you to enjoy your travels. This is why we don't charge
                any fees on purchases while you're aboroad. We'll even show
                you...
              </p>
            </div>
          </div>
          <div className="article">
            <img src={confetti} alt="" />
            <div className="article_desc">
              <h5>By Claire Robinson</h5>
              <h2>Our invite-only Beta accounts are now live!</h2>
              <p>
                After a lot of hard work by the whole team, we're excited to
                lunch our closed betan, it's easy to request an invite through
                the site...
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
      {/* *************************-End Articles-******************************************** */}

      {/* *************************-Footer-******************************************** */}
      <footer>
        <div className="left_footer">
          <div>
            <img src={logo} alt="logo" />
            <ol>
              <li><i  className="fa-brands fa-square-facebook"></i></li>
              <li><i  className="fa-brands fa-youtube"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i  className="fa-brands fa-pinterest"></i></li>
              <li><i  className="fa-brands fa-instagram"></i></li>
            </ol>
          </div>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right_footer">
        <button className="request_butt">Request Invite</button>
        <h5>© EasyBank. All Rights Reserved</h5>
        </div>
      </footer>
      {/* *************************-End Footer-******************************************** */}
    </div>
  );
};

export default Landing;
