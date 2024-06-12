// Router
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Mui
import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

// Layout
import AppLayout from '@/components/layout/AppLayout'
import AuthLayout from '@/components/layout/AuthLayout'

// Pages
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Project from '@/pages/Project'

function App() {
  const theme = createTheme({
    palette: { mode: 'dark'}
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
          </Route>
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="projects" element={<Home/>}/>
            <Route path="project/:projectId" element={<Project/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
