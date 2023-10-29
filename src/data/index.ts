import { IProject, IService, ITestimonial } from "../types";

export const whatWeOffer: IService[] = [
    {
        title: "web application development",
        description: 'We develop cutting-edge web applications tailored to your needs.',
        icon: 'web.svg'
    },
    {
        title: "HIGHLY CUSTOMIZABLE",
        icon: 'customizable.svg',
        description: "Our solutions are highly customizable to suit your unique requirements."
    },
    {
        title: "RESPONSIVE DESIGN",
        description: "We ensure that your website or app looks great on all devices.",
        icon: "responsive.svg"
    },
    {
        title: "SERVICE & PLUGINS",
        description: "We offer additional services and plugins to enhance your web experience.",
        icon: "service.svg"
    },
    {
        title: "Hosting",
        description: "Secure and reliable hosting services to keep your website running smoothly.",
        icon: "hosting.svg"
    },
    {
        title: "E-COMMERCE",
        description: "We provide e-commerce solutions to help you sell products effectively.",
        icon: "ecommerce.svg"
    }
]


export const projects: IProject[] = [
    {
        title: "creative landing page",
        tag: "website"
    },
    {
        title: "why we collect user data",
        tag: "digital marketing"
    },
    {
        title: "creative branding",
        tag: "branding"
    },
    {
        title: "creative landing page",
        tag: "user testing"
    },
    {
        title: "Automation. Advanced level",
        tag: "automation"
    },
    {
        title: "How We Optimized Our SEO",
        tag: "SEO"
    }
]

export const testimonials: ITestimonial[] = [
    {
        content: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
        postedBy: {
            name: "Brooklyn Simmons",
            profile: "1.png",
            worksAt: "manam",
        }
    },
    {
        content: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
        postedBy: {
            name: "Esther Howard",
            profile: "2.png",
            worksAt: "Offmax"
        }
    },
    {
        content: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
        postedBy: {
            name: "Arlene McCoy",
            profile: "3.png",
            worksAt: "bloopixel"
        }
    }, {
        content: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis. ",
        postedBy: {
            name: "Jane Cooper",
            worksAt: "unpixel",
            profile: "1.png"
        }
    }
]