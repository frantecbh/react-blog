import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../pages/Home";
import Layout from "../pages/Layout";
import { NewPost } from "../pages/NewPost";
import { NotFound } from "../pages/NotFound";

// import { Container } from './styles';

export function AppRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="newpost" element={<NewPost />} />   
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
  )
}

