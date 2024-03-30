import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Hero.css";
import "../Styles.css";
import React from "react";
export default function Hero() {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", alignItems: "center", marginTop: "50px" }}
    >
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="hero\banner-15.jpg" alt="00" />
          <Box
            sx={{
              position: "absolute",
              left: "10%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#222",
                fontWeight: 400,
                my: 1,
              }}
            >
              LIFESTYLE COLLECTION
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#222",
                fontFamily: "bold",
              }}
            >
              MEN
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
              }}
            ></Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#2b3445",
              }}
            >
              SALE UP TO <strong className="OFF"> 30% OFF</strong>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
              }}
            >
              Get Free Shipping on orders over $99.00
            </Typography>
            <Button
              sx={{
                bgcolor: "black",
                color: "white",
                px: "20px",
                py: "10px",
                opacity: 1,
                borderRadius: 0,
                transition: "background-color 0.3s",
                "&:hover": {
                  bgcolor: "black",
                  opacity: 0.7,
                },
              }}
            >
              Shop Now
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img src="hero\banner-25.jpg" alt="11" />
          <Box
            sx={{
              position: "absolute",
              left: "10%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#222",
                fontWeight: 400,
                my: 1,
              }}
            >
              LIFESTYLE COLLECTION
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#222",
                fontFamily: "bold",
              }}
            >
              WOMAN
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
              }}
            ></Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#2b3445",
              }}
            >
              SALE UP TO <strong className="OFF"> 30% OFF</strong>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
              }}
            >
              Get Free Shipping on orders over $99.00
            </Typography>
            <Button
              sx={{
                bgcolor: "black",
                color: "white",
                px: "20px",
                py: "10px",
                opacity: 1,
                borderRadius: 0,
                transition: "background-color 0.3s",
                "&:hover": {
                  bgcolor: "black",
                  opacity: 0.7,
                },
              }}
            >
              Shop Now
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Box>
        <Box sx={{ position: "relative" }}>
          <img src="hero\banner-17.jpg" alt="00" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: 31,
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2b3445",
                fontSize: "13px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#D23F57",
                },
              }}
              underline="none"
            >
              shop new{" "}
              <ArrowForwardIcon
                sx={{
                  fontSize: "15px",
                  mt: "4px",
                }}
              />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img src="hero\banner-16.jpg" alt="00" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: 31,
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2b3445",
                fontSize: "13px",
              }}
            >
              GAMING 4K
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              DESKTOPS & LAPTOPS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
              }}
            >
              & LAPTOPS
            </Typography>
            <Link
              sx={{
                color: "#2b3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#D23F57",
                },
              }}
              underline="none"
            >
              shop new
              <ArrowForwardIcon
                sx={{
                  fontSize: "15px",
                  mt: "4px",
                }}
              />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
