import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import LandingPage from "./pages/LandingPage"
import OnboardingPage from "./pages/OnboardingPage"
import JobListing from "./pages/JobListing"
import JobPage from "./pages/JobPage"
import PostJobs from "./pages/PostJobs"
import SavedJobs from "./pages/SavedJobs"
import MyJobs from "./pages/MyJobs"
import './app.css';
import { ThemeProvider } from "./components/ui/theme-provider"


const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/onboarding",
        element:<OnboardingPage/>
      },
      {
        path:"/jobs",
        element:<JobListing/>
      },
      {
        path:"/job/:id",
        element:<JobPage/>
      },
      {
        path:"/post-job",
        element:<PostJobs/>
      },
      {
        path:"/saved-job",
        element:<SavedJobs/>
      },
      {
        path:"/my-job",
        element:<MyJobs/>
      },

    ]
  }
])


function App() {
  

  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
