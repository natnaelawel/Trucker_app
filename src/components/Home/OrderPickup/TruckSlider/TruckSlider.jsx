// Import Swiper React components
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";
import classnames from "classnames";
import classes from "./truckerslide.module.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const SingleCar = ({ isSelected, car }) => {
  const selectedItemClass = classes.selected;
  return (
    <Card className={classnames({ [selectedItemClass]: isSelected })}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={car.type}
          height="80"
          image={car.image}
          title={car.type}
        />
        <Typography
          align="center"
          variant="subtitle1"
          color="textSecondary"
          component="h2"
        >
          {car.price} $/mile
        </Typography>
        <Typography align="center" variant="body2" component="p">
          {car.type}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const TruckerSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };
  const handleClick = (index) => {
    setSelectedIndex(index);
  };
  const cars = [
    {
      type: "Hot Shot",
      image: "/images/trucker1.jpeg",
      price: 50,
    },
    {
      type: "Dry Van",
      image: "/images/trucker2.jpg",
      price: 50,
    },
    {
      type: "Referer",
      image: "/images/trucker3.jpg",
      price: 50,
    },
    {
      type: "Tanker",
      image: "/images/trucker4.gif",
      price: 50,
    },
    {
      type: "Bull Hauler",
      image: "/images/trucker5.jpg",
      price: 50,
    },
    {
      type: "Flat Bed",
      image: "/images/trucker6.jpg",
      price: 50,
    },

    {
      type: "Hot Shot",
      image: "/images/trucker1.jpeg",
      price: 50,
    },
    {
      type: "Dry Van",
      image: "/images/trucker2.jpg",
      price: 50,
    },
    {
      type: "Referer",
      image: "/images/trucker3.jpg",
      price: 50,
    },
    {
      type: "Tanker",
      image: "/images/trucker4.gif",
      price: 50,
    },
    {
      type: "Bull Hauler",
      image: "/images/trucker5.jpg",
      price: 50,
    },
    {
      type: "Flat Bed",
      image: "/images/trucker6.jpg",
      price: 50,
    },
  ];
  return (
    <Grid container alignItems="center">
      <Grid item xs={11}>
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation={{
            nextEl: ".next",
          }}
          className={classes.swiper}
        >
          {cars.map((car, index) => {
            return (
              <SwiperSlide key={index} onClick={() => handleClick(index)}>
                <SingleCar car={car} isSelected={selectedIndex == index} />
              </SwiperSlide>
            );
          })}

          <div className="next"></div>
        </Swiper>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TruckerSlider;
