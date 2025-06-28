import { AccountCircleIcon, AddHomeIcon, ContactIcon, ProjectIcon, DesignServicesOutlinedIcon, ArticleIcon, WorkIcon, SchoolIcon } from "./assets";

const routes = [
    {
        name: "Home",
        path: "/dashboard/home",
        icon: <AddHomeIcon />,
    },
    {
        name: "About",
        path: "/dashboard/about",
        icon: <AccountCircleIcon />,
    },
    // {
    //     name: "Contact",
    //     path: "/dashboard/contact",
    //     icon: <ContactIcon />,
    // },
    {
        name: "Projects",
        path: "/dashboard/projects",
        icon: <ProjectIcon />,
    },
    {
        name: "Experience",
        path: "/dashboard/experience",
        icon: <WorkIcon />,
    },
    // {
    //     name: "Education",
    //     path: "/dashboard/education",
    //     icon: <SchoolIcon />,
    // },
    // {
    //     name: "Services",
    //     path: "/dashboard/services",
    //     icon: <DesignServicesOutlinedIcon />,
    // },
    // {
    //     name: "Blog",
    //     path: "/dashboard/blog",
    //     icon: <ArticleIcon />,
    // },

];

export default routes;

