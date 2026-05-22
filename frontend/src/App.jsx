// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthProvider, AuthContext } from "./context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   return (
//     <nav>
//       <>
//         <Link to="/">Home</Link>
//         {user ? (

//           <span>Hi, {user.name} ({user.role})</span>
//           {user.role === "admin" && <Link to="/admin">Dashboard</Link>}
//         <button onClick={logout}>Logout</button>
//       </>
//     </nav>
//   ) : (  Login
//          Signup
//          )}

//           );
// };

// const AppRoutes = () => {
//   const { login, signup } = useContext(AuthContext);

//   return (
//     Home Page
// } />
//         Admin Dashboard} />



// Login

// login("test@test.com", "123456")}> Login Demo} />



// Signupsignup("Ali", "test@test.com", "123456", "user")}> Signup Demo
          
//         } />


//           );
// };

// export default function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Navbar />
//         <AppRoutes />
//       </AuthProvider>
//     </BrowserRouter>

//   );
// }



import {BrowserRouter, Routes,Route,Link,} from "react-router-dom";
import { useContext } from "react";
import {AuthProvider,AuthContext,} from "./context/AuthContext";

// Navbar Component
const Navbar = () => {
  const { user, logout } =
    useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>

      {user ? (
        <>
          <span>
            Hi, {user.name} ({user.role})
          </span>

          {user.role === "admin" && (
            <Link to="/admin">
              Dashboard
            </Link>
          )}

          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            Login
          </Link>

          <Link to="/signup">
            Signup
          </Link>
        </>
      )}
    </nav>
  );
};

// Routes Component
const AppRoutes = () => {
  const { login, signup } =
    useContext(AuthContext);

  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={<h1>Home Page</h1>}
      />

      {/* Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <h1>Admin Dashboard</h1>
        }
      />

      {/* Login */}
      <Route
        path="/login"
        element={
          <div>
            <h1>Login</h1>

            <button
              onClick={() =>
                login(
                  "test@test.com",
                  "123456"
                )
              }
            >
              Login Demo
            </button>
          </div>
        }
      />

      {/* Signup */}
      <Route
        path="/signup"
        element={
          <div className="p-4">
            <h1>Signup</h1>

            <button
              onClick={() =>
                signup(
                  "Ali",
                  "test@test.com",
                  "123456",
                  "user"
                )
              }
            >
              Signup Demo
            </button>
          </div>

        



        }
      />
    </Routes>
  );
};

// Main App
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}