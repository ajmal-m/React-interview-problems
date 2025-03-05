export const navigationData = [
    {
        label: "Home",
        link: "/home"
    },
    {
        label: "Services",
        link: "/services",
        children: [
            {
                label: "Web Development",
                link: "/services/web-development"
            },
            {
                label: "SEO",
                link: "/services/seo",
                children: [
                    {
                        label: "Local SEO",
                        link: "/services/seo/local"
                    },
                    {
                        label: "E-commerce SEO",
                        link: "/services/seo/ecommerce"
                    }
                ]
            },
            {
                label: "Content Writing",
                link: "/services/content-writing"
            }
        ]
    },
    {
        label: "About Us",
        link: "/about-us",
        children: [
            {
                label: "Our Team",
                link: "/about-us/team"
            },
            {
                label: "Our Mission",
                link: "/about-us/mission"
            }
        ]
    },
    {
        label: "Contact",
        link: "/contact"
    }
];