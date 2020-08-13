const styles = (theme) => ({
  bannerContainer: {
    backgroundColor: "#000000",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
  },
  arrow: {
    position: "absolute",
    width: "100%",
    bottom: "2%",
  },
  primaryFont: {
    fontFamily: theme.fonts.primary.main,
    textTransform: "uppercase",
    marginBottom: "2rem",
  },
  secondaryFont: {
    fontFamily: theme.fonts.secondary.main,
    marginBottom: "2rem",
  },
  chevron: {
    "&:before": {
      content: `"<  "`,
      marginRight: "8px;",
    },
    "&:after": {
      content: `" />"`,
      marginLeft: "8px;",
    },
  },
});
export default styles;
