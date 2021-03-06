import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"
// import oceanBeachTheme from 'typography-theme-ocean-beach'
import sutroTheme from 'typography-theme-sutro'


sutroTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete sutroTheme.googleFonts

// const typography = new Typography(Wordpress2016)
const typography = new Typography(sutroTheme)


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
