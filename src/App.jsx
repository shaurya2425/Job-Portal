import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import LandingPage from "./pages/LandingPage"
import OnboardingPage from "./pages/OnboardingPage"
import JobListing from "./pages/JobListing"
import JobPage from "./pages/JobPage"
import PostJobs from "./pages/PostJobs"
import SavedJobs from "./pages/SavedJobs"
import MyJobs from "./pages/MyJobs"
import { ThemeProvider } from "./components/ui/theme-provider"
import ProtectedRoute from "./components/ProtectedRoute"


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
        element:(
          <ProtectedRoute>
            <OnboardingPage/>
          </ProtectedRoute>
        )
      },
      {
        path:"/jobs",
        element:(
          <ProtectedRoute>
            <JobListing/>
          </ProtectedRoute>
        )
      },
      {
        path:"/job/:id",
        element:(
          <ProtectedRoute>
            <JobPage/>
          </ProtectedRoute>
        )
      },
      {
        path:"/post-job",
        element:(
          <ProtectedRoute>
            <PostJobs/>
          </ProtectedRoute>
        )
      },
      {
        path:"/saved-jobs",
        element:(
          <ProtectedRoute>
            <SavedJobs/>
          </ProtectedRoute>
        )
      },
      {
        path:"/my-jobs",
        element:(
          <ProtectedRoute>
            <MyJobs/>
          </ProtectedRoute>
        )
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
