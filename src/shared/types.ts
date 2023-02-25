export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
  Events = "events",
  OurProcess = "ourprocess",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface EventType {
  status: "upcoming" | "past";
  name: string;
  date: Date;
  link: string;
  address: string;
  results?: any;
  img_url?: any;
  map?: string;
}
