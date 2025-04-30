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
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
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
        "All S23 Ultra models have Snapdragon 8 Gen 2 (no more Exynos). New 200MP main camera, improvements to other cameras. 256GB base storage (double than before). Big improvement in loudspeaker quality.",
      url: "https://www.samsung.com/us/smartphones/galaxy-s23-ultra/",
    },
    {
      topic: "Smartphones",
      date: "Nov 4, 2020",
      title: "iPhone 14 Pro Max",
      imgUrl:
        "https://www.apple.com/v/iphone-14-pro/e/images/meta/iphone-14-pro_overview__3dn6st99cpea_og.png?auto=compress&cs=tinysrgb&dpr=2&w=500",
      content:
        "The iPhone 14 Pro Max isn't just the most powerful phone around. It's a joy to use, thanks to the clever new Dynamic Island for displaying notifications and live activities. Also delivers fantastic cameras.",
      url: "https://www.apple.com/iphone-14-pro/",
    },
    {
      topic: "Smartphones",
      date: "Dec 28, 2020",
      title: "Xiaomi 13",
      imgUrl:
        "https://techcrunch.com/wp-content/uploads/2023/02/XIaomi-13-Pro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      content:
        "Xiaomi has revamped the design of the 13 Pro – most of the phone retains its usual sleek appearance, but the gigantic camera module sticks out like a sore thumb.",
      url: "https://www.mi.com/global/product/xiaomi-13/",
    },
  ];

  return (
    <div className="nav-spacing">
      <Box
        sx={{
          flexGrow: 1,
          py: 8,
          minHeight: "100vh",
          backgroundColor: "#f0f2f5",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          sx={{
            mb: 6,
            color: "#0f3460",
            letterSpacing: 1,
          }}
        >
          Reviews
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="220"
                  image={review.imgUrl}
                  alt={review.title}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="overline" color="primary.main" gutterBottom>
                    {review.topic}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    gutterBottom
                  >
                    {review.date}
                  </Typography>

                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      mb: 1,
                      "& a": {
                        textDecoration: "none",
                        color: "inherit",
                        transition: "color 0.2s",
                      },
                      "& a:hover": {
                        color: "#00bcd4",
                      },
                    }}
                  >
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
