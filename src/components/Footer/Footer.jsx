import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlayMarket from "../images/googlePlayBtn.png";
import AppStore from "../images/AppStoreBtn.png";
import { Link } from "react-router-dom";
import Pays from "../images/payLogos.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-tart",
          }}
        >
          <Grid item lg={2}>
            <div className="downloads">
              <Link>
                <img src={PlayMarket} alt="" />
              </Link>
              <Link>
                <img src={AppStore} alt="" />
              </Link>
            </div>
          </Grid>

          <Grid item lg={2}>
            <ul>
              <li>
                <Link>Агентствам</Link>
              </li>
              <li>
                <Link>О компании</Link>
              </li>
              <li>
                <Link>Публичная оферта</Link>
              </li>
              <li>
                <Link>Договор комиссии</Link>
              </li>
            </ul>
          </Grid>

          <Grid item lg={2}>
            <div className="pays">
              <p>Принимаем к оплате</p>

              <img src={Pays} alt="" />
            </div>
          </Grid>

          <Grid item lg={1.6}>
            <Link>
              <div className="contact">
                <LocalPhoneIcon />
                +998711002021
              </div>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
