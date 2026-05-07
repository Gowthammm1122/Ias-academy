import { createBrowserRouter } from "react-router";
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { EventGalleryPage } from './pages/EventGalleryPage';
import { StudentPortalPage } from './pages/StudentPortalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "event-gallery", Component: EventGalleryPage },
      { path: "student-portal", Component: StudentPortalPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
