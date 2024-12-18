import "../assets/home.css";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import HeaderLinks from "../components/header_links";
import Profile from "../components/profile";
import { NavLink } from 'react-router-dom';


const Home = () => {

  const time = new Date();
  const year = time.getFullYear();

  return (
    <div>
      <section className="sec-one">
        {/* About Me */}
        <div className="art-1"></div>
        <div className="art-2"></div>

        <Navbar />

        <header>
          <div className="header-content">
            <div className="header-links">
              <div className="header-links-content">
                <HeaderLinks />
              </div>
            </div>
            <div className="left">
              <div className="left-content">
                <div className="top">
                  <h1>
                    Full Stack <span>Developer.</span>
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vero quasi, quod est nihil illum tenetur Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Praesentium, eveniet!
                  </p>
                </div>

                <div className="bottom">
                  <div className="btn1">
                    <button>Download CV</button>
                  </div>
                  <div className="btn2">
                    <button>Discover More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Profile />
            </div>
          </div>
        </header>
      </section>

      <section id="skills" className="sec-two">
        {/* Skills */}
        <div className="top">
          <div className="top-content">
            <h1 className="title">Discover Skills</h1>
            <p>Our Meeting in Switzen</p>
          </div>
        </div>
        <div className="bottom">

            <div className="bottom-grid">
              <Card title="React Js" imgName="laptop1.jpeg" />
              <Card
                title="JavaScript"
                imgName="girl_gradient.jpeg"
                position="top"
              />
              <Card title="HTML" imgName="laptop_dark.jpeg" />
              <Card title="CSS" imgName="girl_gaming.jpeg" />
              <Card title="Node Js" imgName="girl_dark.jpeg" />
              <Card title="Type Script" imgName="tokyo1.jpeg" />
              <Card title="Express" imgName="tanjero.jpeg" />
              <Card title="SQL" imgName="laptop_IPhone.jpeg" />
            </div>

        </div>
      </section>


      <section id="education" className="sec-three">
        {/* Education */}
        <div className="sec-three-content">
          
          <div className="top">
            <div className="top-content">
              <h1 className="title">Discover Education</h1>
              <p>tokyo is the perfect education</p>
            </div>
          </div>

          <div className="bottom">
            <div className="left">
            <div className="title">
              <h1>tokyo</h1>
              <h2>SoftWare Developement</h2>
            </div>
            <div className="details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, eius, blanditiis et magnam id dolore numquam incidunt
                asperiores iste tempora dolores deserunt porro sunt animi,
                ducimus voluptatibus dicta aspernatur atque dolorem .nobis.
                Pariatur non nisi, iusto maiores quia blanditiis a!
              </p>
              <div className="btn">
              <button>Discover Education</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img-box">
              {/* <div className="img"></div> */}
              <img src="../img/tokyo3.jpeg" alt="" />
              <div className="details">
                {/* <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem fugiat reiciendis laboriosam, est enim expedita
                  veritatis magnam. Quidem, libero tempore.
                </p> */}
              </div>
            </div>
          </div>
          </div>

        </div>
      </section>


      {/* Certificates */}
      {/* Rating */}
      <section id="rating" className="sec-four">
        <div className="sec-four-content">
        <div className="top">
            <div className="top-content">
              <h1 className="title">Discover Rating</h1>
              <p>discovering many learing language rating</p>
            </div>
          </div>

          <div className="bottom">
            <div className="bottom-content">

            <div className="box-rate">
                <div className="title">tokyo</div>
                <div className="number">23,202</div>
              </div>
              <div className="box-rate">
                <div className="title">tokyo</div>
                <div className="number">23,202</div>
              </div>
              <div className="box-rate">
                <div className="title">tokyo</div>
                <div className="number">23,202</div>
              </div>
              <div className="box-rate">
                <div className="title">tokyo</div>
                <div className="number">23,202</div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Forms - Contact */}

      {/* Footer */}
      <footer>
        <div className="footer-content">


          <div className="top">
            <div className="top-content">
              <div className="left">
              <div className="profile">
                <div className="img-box">
                <div className="img"></div>
                </div>
                <div className="details">
                  <div className="user">Yousef.G.harara</div>
                  <div className="e-mail">hrarty37@gmail.com</div>
                </div>
              </div>
              </div>

              <div className="right">


              <div className="box-links">
                  <h1 className="title">Title</h1>
                  <ul className="links">
                    <li><NavLink to={"/"}>Link1</NavLink> </li>
                    <li><NavLink to={"/"}>Link2</NavLink> </li>
                    <li><NavLink to={"/"}>Link3</NavLink> </li>
                    <li><NavLink to={"/"}>Link4</NavLink> </li>
                  </ul>
                </div>
                <div className="box-links">
                  <h1 className="title">Title</h1>
                  <ul className="links">
                    <li><NavLink to={"/"}>Link1</NavLink> </li>
                    <li><NavLink to={"/"}>Link2</NavLink> </li>
                    <li><NavLink to={"/"}>Link3</NavLink> </li>
                    <li><NavLink to={"/"}>Link4</NavLink> </li>
                  </ul>
                </div>
                <div className="box-links">
                  <h1 className="title">Title</h1>
                  <ul className="links">
                    <li><NavLink to={"/"}>Link1</NavLink> </li>
                    <li><NavLink to={"/"}>Link2</NavLink> </li>
                    <li><NavLink to={"/"}>Link3</NavLink> </li>
                    <li><NavLink to={"/"}>Link4</NavLink> </li>
                  </ul>
                </div>


              </div>
            </div>
          </div>


          <div className="bottom">
            Yousef.G.Js SoftWare Developer copyRight &copy; 2021-{year}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
