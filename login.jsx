import {
  Button,
  Checkbox,
  Dialog,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import logo from "assets/logo/MusesignWhite.png";
import routes from "configs/routes.config.json";
import { TextField } from "components/core/TextField";
import { RecoverPasswordPopup } from "../RecoverPassword";
import {
  Link,
  ButtonYellow,
  FacebookLoginButton,
  GoogleLoginButton,
  LinkedInLoginButton,
} from "components/core";

export const Login = () => {
  return (
    <React.Fragment>
      <Grid
        container
        columns={10}
        display="flex"
        direction={{ sm: "row", xs: "column" }}
      >
        <Grid
          xs={3}
          item
          bgcolor="primary.main"
          padding={{ lg: 3, xs: 2 }}
          display="flex"
          flexDirection="column"
          color="white"
          paddingTop={{ lg: 7, md: 4, xs: 3 }}
          paddingBottom={{ lg: 8, md: 4, xs: 3 }}
        >
          <Box
            minHeight={{ sm: "40%", xs: 0 }}
            maxWidth={{ xs: 160 }}
            paddingLeft={{ sm: 1, xs: 0 }}
            paddingRight={{ sm: 1, xs: 0 }}
          >
            <img src={logo} width="100%" alt={"logo"} />
          </Box>

          <Box>
            <Typography variant="h3">{t("login.welcome-title")}</Typography>
            <Typography>{t("login.welcome-description")}</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={7}
          display="flex"
          flexDirection="column"
          textAlign="center"
          paddingLeft={{ lg: 14, xs: 4 }}
          paddingRight={{ lg: 14, xs: 4 }}
          paddingTop={{ lg: 8, xs: 4 }}
          paddingBottom={{ lg: 8, xs: 4 }}
        >
          <Box marginBottom={{ sm: 10, xs: 2 }}>
            <Typography fontWeight={800} fontSize={20}>
              {t("login.heading")}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={"column"}
            minHeight={300}
            justifyContent="space-between"
          >
            <FacebookLoginButton />
            <GoogleLoginButton />
            <LinkedInLoginButton />

            <Divider
              component="div"
              sx={{
                ":before": {
                  borderColor: "secondary.main",
                  top: "0",
                },
                ":after": {
                  borderColor: "secondary.main",
                  top: "0",
                },
              }}
            >
              <Typography fontSize={22} sx={{ transform: { translateY: 10 } }}>
                {t("login.or")}
              </Typography>
            </Divider>
            <TextField
              fullWidth
              placeholder={"" + t("login.email-placeholder")}
              size="small"
              required
              variant="outlined"
            ></TextField>
            <TextField
              fullWidth
              placeholder={"" + t("login.password-placeholder")}
              size="small"
              required
              variant="outlined"
            ></TextField>
          </Box>
          <Box
            display="flex"
            flexDirection={{ lg: "row", xs: "column" }}
            alignItems="center"
            justifyContent={"space-between"}
            marginTop={5}
          >
            <FormControlLabel
              label={t("login.remember-me")}
              control={<Checkbox />}
              componentsProps={{ typography: { variant: "body2" } }}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 20 }, ...typographySx }}
            />

            <RecoverPasswordPopup />
          </Box>
          <Box marginTop={5}>
            <ButtonYellow>{t("login.login")}</ButtonYellow>
            <Typography marginTop={2} fontSize={12} display="block">
              {t("login.no-account") + " "}

              <Link
                to={routes.login["register"].link}
                typographyProps={{
                  fontSize: 12,
                  fontWeight: 800,
                }}
              >
                {t("login.register")}
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
