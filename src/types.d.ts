export interface Project {
  id: string
  name: string
  technologies: Technology[]
  description: string
}

type Technology = string
