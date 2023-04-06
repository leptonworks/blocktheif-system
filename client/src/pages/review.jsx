import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

function Review() {
  const reviews = [
    {
      topic: "Smartphones",
      date: "Mar 10, 2023",
      title: "Samsung Galaxy S23 Ultra",
      imgUrl:
        "https://image-us.samsung.com/us/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      content:
        "All S23 Ultra models have Snapdragon 8 Gen 2 (no more Exynos) New 200MP main camera, improvements to the other cameras. 256GB base storage (double than before) Big improvement in loudspeaker quality.",
      url: "https://www.samsung.com/us/smartphones/galaxy-s23-ultra/",
    },
    {
      topic: "Smartphones",
      date: "4 Nov 2020",
      title: "iPhone 14 Pro Max",
      imgUrl:
        "https://www.apple.com/v/iphone-14-pro/e/images/meta/iphone-14-pro_overview__3dn6st99cpea_og.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
      content:
        "The iPhone 14 Pro Max isn't just the most powerful phone around. It's a joy to use, thanks to the clever new Dynamic Island for displaying notifications and live activities. Apple's largest Pro model also delivers fantastic cameras.",
      url: "https://www.apple.com/iphone-14-pro/",
    },
    {
      topic: "Smartphones",
      date: "28 Dec 2020",
      title: "Xiaomi 13",
      imgUrl:
        "https://techcrunch.com/wp-content/uploads/2023/02/XIaomi-13-Pro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      content:
        "Xiaomi has revamped the design of the 13 Pro – just not in a good way. Most of the phone retains its usual sleek appearance, but the gigantic camera module sticks out like a sore thumb.",
      url: "https://www.mi.com/global/product/xiaomi-13/",
    },
  ];

  return (
    <div className="nav-spacing">
      <div className="nav-spacing">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 py-4 border-b-2 border-gray-300">
          Reviews
        </h1>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          minHeight: "100vh",
          backgroundColor: "#f4f6f8",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={review.imgUrl}
                  alt={review.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {review.topic}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    gutterBottom
                  >
                    {review.date}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {review.title}
                    </a>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {review.content}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Review;