import { createBrowserRouter } from "react-router";
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { EventGalleryPage } from './pages/EventGalleryPage';
import { StudentPortalPage } from './pages/StudentPortalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "resources", Component: ResourcesPage },
      { path: "contact", Component: ContactPage },
      { path: "event-gallery", Component: EventGalleryPage },
      { path: "student-portal", Component: StudentPortalPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
