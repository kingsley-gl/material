import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "layouts/Login/Login.jsx"

const indexRoutes = [
    { path: "/login", component: Login, exact: false},
    { path: "/system", component: Dashboard },
    { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
];

export default indexRoutes;
