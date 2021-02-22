import merge from "deepmerge"
import defaultTheme from "sidhant-portfolio/src/gatsby-plugin-theme-ui/index"

export default merge(defaultTheme, {
  colors: {
    background: "ghostwhite",
    text: "black",
    primary: "mediumvioletred",
    modes: {
      dark: {
        background: "indigo",
        text: "ghostwhite",
        primary: "gold",
      },
    },
  },
})
