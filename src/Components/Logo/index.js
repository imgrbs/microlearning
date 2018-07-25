import React from "react"
import { Image, Grid } from "semantic-ui-react"

const Logo = () => (
  <Grid centered>
    <div style={logoStyle}>
      <Image src='https://assets.skooldio.com/logo/skooldio_logo_current.png' style={imgStyle} />
    </div>
  </Grid>
)

const logoStyle = {
  marginTop: "20px",
  marginBottom: "15px"
}

const imgStyle = {
  height: "9vh"
}

export default Logo
