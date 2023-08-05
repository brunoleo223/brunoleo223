export interface AboutMeProps{
    about?: MyDataProps;
    skills: SkillsProps[];
    experiences: ExperienceProps[];
    certifications: CertificationsProps[];
    education: EducationProps[];
    
}

export interface MyDataProps {
    id: number;
    firstName: string;
    lastName: string;
    miniBio: string;
    social: SocialNetworkProps[];
}

export interface SocialNetworkProps{
    id: number;
    name: string;
    iconUrl: string;
    link: string;
}

export interface SkillsProps {
    id: number;
    title: string;
    content: string;
}

export interface ExperienceProps {
    id: number;
    company: string;
    logoUrl: string;
    role: string;
    duration: string;
    description: string;
}
export interface CertificationsProps {
    id: number|string;
    name: string;
    logoUrl: string;
    duration: string;
    credencial_link: string;
}

export interface EducationProps {
    id: number;
    logoUrl: string;
    title: string;
    school: string;
}