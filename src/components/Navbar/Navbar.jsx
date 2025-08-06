import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Collapse,
  Grid,
  ClickAwayListener,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const megaRef = useRef(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (drawerOpen) setMegaOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between", position: "relative" }}>
          <Typography variant="h6">MyLogo</Typography>

          {/* Desktop Menu */}

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              {/* Services with Mega Menu */}
              <Box
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Button color="inherit">Services</Button>
              </Box>
              <Button color="inherit">Products</Button>
              <Button color="inherit">Blog</Button>
              <Button color="inherit">Contact</Button>
            </Box>
          ) : (
            <IconButton edge="end" onClick={toggleDrawer}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>

        {/* Mega Dropdown - Full Width */}
        {!isMobile && (
          <Box
            ref={megaRef}
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            sx={{
              position: "absolute",
              top: "64px",
              left: 0,
              width: "100%",
              bgcolor: "white",
              zIndex: 999,
              //   borderTop: "1px solid #ddd",
              boxShadow: theme.shadows[1],
            }}
          >
            <Collapse in={megaOpen} timeout={300}>
              <Box px={10} py={4}>
                <Grid container spacing={4}>
                  {[
                    {
                      title: "Design",
                      links: [
                        "UI/UX",
                        "Branding",
                        "Illustrations",
                        "Web Design",
                      ],
                    },
                    {
                      title: "Development",
                      links: ["React", "Node.js", "Next.js", "Firebase"],
                    },
                    {
                      title: "Marketing",
                      links: [
                        "SEO",
                        "Content Writing",
                        "Email",
                        "Social Media",
                      ],
                    },
                    {
                      title: "Resources",
                      links: ["Docs", "Tutorials", "Templates", "Pricing"],
                    },
                  ].map((section, index) => (
                    <Grid item xs={12} md={3} key={index}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        gutterBottom
                      >
                        {section.title}
                      </Typography>
                      {section.links.map((link, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            cursor: "pointer",
                            color: "text.secondary",
                            "&:hover": { color: "primary.main" },
                          }}
                        >
                          {link}
                        </Typography>
                      ))}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Collapse>
          </Box>
        )}
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <Button fullWidth onClick={() => setMegaOpen(!megaOpen)}>
            Services
          </Button>
          <Collapse in={megaOpen} timeout="auto" unmountOnExit>
            <Box pl={2} py={1}>
              <Typography fontWeight={600}>Design</Typography>
              <Typography variant="body2">UI/UX</Typography>
              <Typography variant="body2">Web Design</Typography>
              <Typography fontWeight={600} mt={2}>
                Development
              </Typography>
              <Typography variant="body2">React</Typography>
              <Typography variant="body2">Node.js</Typography>
              <Typography fontWeight={600} mt={2}>
                Marketing
              </Typography>
              <Typography variant="body2">SEO</Typography>
              <Typography variant="body2">Social Media</Typography>
            </Box>
          </Collapse>
          <Button fullWidth sx={{ mt: 2 }}>
            Products
          </Button>
          <Button fullWidth>Blog</Button>
          <Button fullWidth>Contact</Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
