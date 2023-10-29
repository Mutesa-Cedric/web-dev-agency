
export interface IService {
    title: string,
    icon: string,
    description: string
}

export interface IProject {
    title: string,
    tag: string
}

export interface ITestimonial {
    content: string,
    postedBy: {
        name: string,
        profile: string,
        worksAt: string
    }
}