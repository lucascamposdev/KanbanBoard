import { Typography, Link } from "@mui/material"

const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" marginTop='40px'>
      {'© 2024, Developed by '}
      <Link color="inherit" href="https://www.linkedin.com/in/lucascamposdev/" target="_blank" rel="noopener noreferrer">
        /Lucas Campos
      </Link>
    </Typography>
  )
}

export default Footer