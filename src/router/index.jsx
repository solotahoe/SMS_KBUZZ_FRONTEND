import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingSpinner from "../LoadingSpinner";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const HomeLayout = lazy(() => import("../layout/HomeLayout"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const UsersPage = lazy(() => import("../pages/UsersPage"));
const PlansPage = lazy(() => import("../pages/PlanPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/Sign-up" element={<SignUpPage />} />
          {/* Protected Routes under /home */}
          <Route path="/home" element={<HomeLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="plans" element={<PlansPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
