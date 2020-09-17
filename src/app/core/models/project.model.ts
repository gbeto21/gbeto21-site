import { Technology } from "./technology.model";

export interface Project {
  _id: string,
  name: string,
  description: string,
  image: string,
  url: string,
  technologys: Technology[]
}
