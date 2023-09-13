import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={2} >
            <div className="img">
              <Link>
                <svg
                  width="107"
                  height="30"
                  viewBox="0 0 107 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.65328 4.30509H0V0H20.7089V4.30509H13.0556V22.9979C13.0556 23.4952 12.6525 23.8983 12.1552 23.8983C9.66887 23.8983 7.65328 21.8827 7.65328 19.3964V4.30509Z"
                    fill="#605DEC"
                  />
                  <path
                    d="M32.3751 9.11491C32.4544 10.1933 31.6623 11.1395 30.5867 11.251L29.5739 11.3559C28.1195 11.4915 27.0921 11.8983 26.4919 12.5763C25.8916 13.2316 25.5915 14.113 25.5915 15.2203V22.8983C25.5915 23.4506 25.1438 23.8983 24.5915 23.8983H22.3623C21.2577 23.8983 20.3623 23.0029 20.3623 21.8983V8.25424C20.3623 7.70196 20.81 7.25424 21.3623 7.25424H24.3837C24.936 7.25424 25.3837 7.70195 25.3837 8.25424V10.0678C26.2379 8.14689 28.004 7.09605 30.6821 6.91526C31.5253 6.85898 32.2559 7.49377 32.3179 8.33656L32.3751 9.11491Z"
                    fill="#605DEC"
                  />
                  <path
                    d="M34.2617 8.25424C34.2617 7.70196 34.7095 7.25424 35.2617 7.25424H38.4909C39.0432 7.25424 39.4909 7.70195 39.4909 8.25424V22.8983C39.4909 23.4506 39.0432 23.8983 38.4909 23.8983H36.2617C35.1572 23.8983 34.2617 23.0029 34.2617 21.8983V8.25424Z"
                    fill="#605DEC"
                  />
                  <path
                    d="M54.0218 6.84746C55.4763 6.84746 56.7691 7.22034 57.9004 7.9661C59.0547 8.68926 59.9436 9.71751 60.5669 11.0508C61.2134 12.3616 61.5366 13.8757 61.5366 15.5932C61.5366 17.3107 61.2134 18.8249 60.5669 20.1356C59.9436 21.4237 59.0663 22.4181 57.935 23.1186C56.8038 23.8192 55.4994 24.1695 54.0218 24.1695C52.8675 24.1695 51.817 23.9435 50.8705 23.4915C49.947 23.017 49.2313 22.3616 48.7234 21.5254V29.1285C48.7234 29.6098 48.3332 30 47.8519 30C45.4452 30 43.4942 28.049 43.4942 25.6424V8.25424C43.4942 7.70195 43.9419 7.25424 44.4942 7.25424H47.6541C48.2064 7.25424 48.6541 7.70195 48.6541 8.25424V9.59322C49.162 8.73446 49.8893 8.0678 50.8358 7.59322C51.7824 7.09604 52.8444 6.84746 54.0218 6.84746ZM52.4981 20.2712C53.7217 20.2712 54.6682 19.8757 55.3378 19.0847C56.0073 18.2712 56.342 17.1073 56.342 15.5932C56.342 14.0565 56.0073 12.8701 55.3378 12.0339C54.6682 11.1751 53.7217 10.7458 52.4981 10.7458C51.2745 10.7458 50.3279 11.1638 49.6584 12C48.9889 12.8136 48.6541 13.9887 48.6541 15.5254C48.6541 17.0396 48.9889 18.2147 49.6584 19.0508C50.3279 19.8644 51.2745 20.2712 52.4981 20.2712Z"
                    fill="#605DEC"
                  />
                  <path
                    d="M83.2787 6.84746C85.218 6.84746 86.6609 7.42373 87.6075 8.57627C88.5541 9.72882 89.0273 11.4915 89.0273 13.8644V21.8983C89.0273 23.0029 88.1319 23.8983 87.0273 23.8983H85.7982C84.6936 23.8983 83.7982 23.0029 83.7982 21.8983V14.0339C83.7982 12.904 83.6135 12.0904 83.2441 11.5932C82.8978 11.096 82.2975 10.8475 81.4433 10.8475C79.8206 10.8475 79.2539 12.3635 79.2539 14.7119V21.8983C79.2539 23.0029 78.3585 23.8983 77.2539 23.8983H76.0247C74.9202 23.8983 74.0247 23.0029 74.0247 21.8983V14.0339C74.0247 12.904 73.84 12.0904 73.4707 11.5932C73.1244 11.096 72.5241 10.8475 71.6699 10.8475C70.0472 10.8475 69.4805 12.3635 69.4805 14.7119V21.8983C69.4805 23.0029 68.5851 23.8983 67.4805 23.8983H66.2513C65.1468 23.8983 64.2513 23.0029 64.2513 21.8983V10.2542C64.2513 8.59739 65.5945 7.25424 67.2513 7.25424H68.342C68.8942 7.25424 69.342 7.70195 69.342 8.25424V9.49153C70.4865 7.64056 71.0013 6.84746 73.5745 6.84746C76.091 6.84746 77.7764 7.87571 78.6306 9.9322C79.8088 7.91394 80.5463 6.84746 83.2787 6.84746Z"
                    fill="#605DEC"
                  />
                  <path
                    d="M99.5545 6.84746C102.094 6.84746 103.964 7.43503 105.165 8.61017C106.388 9.78531 107 11.6045 107 14.0678V21.3734C107 23.0302 105.657 24.3734 104 24.3734H102.048V21.4237C101.702 22.2825 101.124 22.9605 100.316 23.4576C99.5083 23.9322 98.5618 24.1695 97.4767 24.1695C96.3223 24.1695 95.2719 23.9435 94.3253 23.4915C93.4019 23.0396 92.6631 22.4068 92.109 21.5932C91.578 20.7797 91.3125 19.8757 91.3125 18.8814C91.3125 17.661 91.6242 16.7006 92.2475 16C92.894 15.2994 93.9213 14.791 95.3296 14.4746C96.7379 14.1582 98.6657 14 101.113 14H102.013V13.3898C102.013 12.3955 101.794 11.6949 101.355 11.2881C100.917 10.8814 100.155 10.678 99.0697 10.678C98.2386 10.678 97.3151 10.8249 96.2993 11.1186C95.9622 11.2161 95.6302 11.3261 95.3033 11.4484C94.2543 11.8411 93.0182 11.4193 92.5981 10.381C92.2563 9.53616 92.5752 8.55733 93.413 8.19849C94.0639 7.91966 94.7836 7.67271 95.572 7.45763C97.0034 7.05085 98.3309 6.84746 99.5545 6.84746ZM98.6195 20.6441C99.6353 20.6441 100.455 20.3164 101.078 19.661C101.702 18.9831 102.013 18.113 102.013 17.0508V16.4746H101.425C99.5545 16.4746 98.2385 16.6215 97.4767 16.9153C96.7379 17.209 96.3685 17.7401 96.3685 18.5085C96.3685 19.1186 96.5763 19.6271 96.9919 20.0339C97.4305 20.4407 97.9731 20.6441 98.6195 20.6441Z"
                    fill="#605DEC"
                  />
                  <path
                    d="M39.5 3C39.5 4.38071 38.3807 5.5 37 5.5C35.6193 5.5 34.5 4.38071 34.5 3C34.5 1.61929 35.6193 0.5 37 0.5C38.3807 0.5 39.5 1.61929 39.5 3Z"
                    fill="#605DEC"
                  />
                </svg>
              </Link>
            </div>
          </Grid>

          <Grid item xs={4} sm={3} md={2} lg={1.5}>
            <button>Kirish</button>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}

export default Navbar;
