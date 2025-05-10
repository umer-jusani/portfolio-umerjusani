import { BootstrapIcon, CssIcon, CursorAiIcon, DisneyClone, FacebookIcon, FarCry4, FirebaseIcon, GitHubIcon, HtmlIcon, InstagramIcon, JsIcon, LinkedinClone, LinkedInIcon, ManageProducts, MaterialUiIcon, MediumIcon, TailwindIcon } from "./shared/assets";

export const drawerWidth = 280;
export const flowSpacer = 6;
export const ContainerSpacerY = "6rem";
export const SectionHeadingVariant = "h3";
export const pageTopSpacer = { md: 5, sm: 2, xs: 1 };
export const belowHeadSpacerBottom = {
    mb: { md: 4, xs: 2 },
}


export const socialMediaIcons = [
    { icon: <LinkedInIcon />, name: 'Linkedin', link: "https://www.linkedin.com/in/umer-jusani/" },
    { icon: <FacebookIcon />, name: 'Facebook', link: "https://www.facebook.com/profile.php?id=100009899801154" },
    { icon: <InstagramIcon />, name: 'Instagram', link: "https://www.instagram.com/muhammadjusani/" },
    { icon: <GitHubIcon />, name: 'GitHub', link: "https://github.com/umer-jusani?tab=repositories" },
    { icon: <MediumIcon />, name: 'Medium', link: "https://medium.com/@umer.jusani.04" },
];

//MySkills
export const skills = [
    {
        title: "Material UI",
        icon: MaterialUiIcon,
        color: "rgba(41, 182, 246, 0.4)"
    },
    {
        title: "Cursor AI (code editor)",
        icon: CursorAiIcon,
        color: "rgba(147, 155, 162, 0.4)"
    },
    {
        title: "Firebase",
        icon: FirebaseIcon,
        color: "rgba(255, 196, 0, 0.4)"
    },
    {
        title: "HTML",
        icon: HtmlIcon,
        color: "rgba(255, 154, 0, 0.4)"
    },
    {
        title: "CSS",
        icon: CssIcon,
        color: "rgba(11, 133, 224, 0.4)"
    },
    {
        title: "JavaScript",
        icon: JsIcon,
        color: "rgba(255, 214, 0, 0.4)"
    },
    {
        title: "Tailwind CSS",
        icon: TailwindIcon,
        color: "rgba(0, 159, 188, 0.4)"
    },
    {
        title: "Bootstrap",
        icon: BootstrapIcon,
        color: "rgba(86, 61, 124, 0.4)"
    }
];


export const projects = [
    {
        title: "Disney Clone",
        image: DisneyClone.src,
        description: "Disney Clone is a web application that allows users to watch Disney movies and shows.",
        link: "https://umer-jusani.github.io/disney-clone/#/home",
        technologies: [
            {
                title: "React",
                color: "rgba(0, 159, 188, 0.4)"
            },
            {
                title: "Firebase",
                color: "rgba(255, 196, 0, 0.4)"
            },
            {
                title: "Styled Components",
                color: "rgba(0, 159, 188, 0.4)"
            },
            {
                title: "Redux",
                color: "rgba(0, 159, 188, 0.4)"
            }
        ]
    },
    {
        title: "Far Cry 4 Clone",
        image: FarCry4.src,
        description: "Far Cry 4 Clone is a web application that allows users to watch Far Cry 4 movies and shows.",
        link: "https://umer-decotechtask.netlify.app/",
        technologies: [
            {
                title: "React",
                color: "rgba(0, 159, 188, 0.4)"
            },
            {
                title: "Styled Components",
                color: "rgba(0, 159, 188, 0.4)"
            }
        ]
    },
    {
        title: "Manage Products",
        image: ManageProducts.src,
        description: "Manage Products is a web application that allows users to manage products.",
        link: "https://responsive-page-one.netlify.app/",
        technologies: [
            {
                title: "HTML",
                color: "rgba(255, 154, 0, 0.4)"
            },
            {
                title: "CSS",
                color: "rgba(11, 133, 224, 0.4)"
            }
        ]
    },
    {
        title: "Linkedin Clone",
        image: LinkedinClone.src,
        description: "Linkedin Clone is a web application that allows users to watch Linkedin movies and shows.",
        link: "https://careerbridge-umer.netlify.app",
        technologies: [
            {
                title: "React",
                color: "rgba(0, 159, 188, 0.4)"
            },
            {
                title: "Firebase",
                color: "rgba(0, 159, 188, 0.4)"
            },
            {
                title: "Styled Components",
                color: "rgba(0, 159, 188, 0.4)"
            },
            {
                title: "AppWrite",
                color: "rgba(0, 159, 188, 0.4)"
            },
            {
                title: "Redux",
                color: "rgba(0, 159, 188, 0.4)"
            }
        ]
    }
]
