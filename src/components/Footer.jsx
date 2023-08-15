import React from "react";
import Link from "./Link";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container-logo">
          <i className="fa-regular fa-futbol fa-bounce logo"></i>
          <h2 className="name-logo">DataWeb Warriors</h2>
        </div>
        <div className="footer__content-list">
          <div>
            <h3 className="footer__subtitle">Tecnología</h3>
            <ul className="footer__list">
              <li className="footer__list-name">
                <Link
                  className="link"
                  href="https://es.react.dev/"
                  name="React"
                />
              </li>
              <li className="footer__list-name">
                <Link
                  className="link"
                  href="https://recharts.org/en-US/"
                  name="Recharts"
                />
              </li>
              <li className="footer__list-name">
                <Link
                  className="link"
                  href="https://fontawesome.com/"
                  name="fontawesome"
                />
              </li>
              <li className="footer__list-name">
                <Link
                  className="link"
                  href="https://fonts.google.com/"
                  name="Google Fonts"
                />
              </li>
              <li className="footer__list-name">
                <Link
                  className="link"
                  href="https://unsplash.com/es"
                  name="Unsplash"
                />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__subtitle">Contáctanos</h3>
            <ul className="footer__list">
              <li className="footer__list-name">
                <Link
                  className="link"
                  href="https://www.linkedin.com/in/reynosoirene/"
                  name="Irene Reynoso"
                />
              </li>
              <li className="footer__list-name">
                <Link
                  className="link"
                  href="https://web.facebook.com/matiasagustin.campos?_rdc=1&_rdr"
                  name="Matias Campos"
                />
              </li>
              <li className="footer__list-name">
                <Link
                  className="link"
                  href="https://www.linkedin.com/in/mary-isabel-martinez-mendoza-97b553171/"
                  name="Isabel Martinez"
                />
              </li>
              <li className="footer__list-name">
                <Link
                  className="link"
                  href="https://www.linkedin.com/in/juan-n%C3%A1jera-33099a113/"
                  name=" Juan Nájera"
                />
              </li>
            </ul>
            <div className="footer__content-icon">
              <i className="fa-brands fa-linkedin icon"></i>
              <i className="fa-brands fa-instagram icon"></i>
              <i className="fa-brands fa-facebook-f icon"></i>
              <i className="fa-brands fa-twitter icon"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
