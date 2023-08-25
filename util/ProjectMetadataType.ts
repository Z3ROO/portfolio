export interface ProjectMetadata {
  name: string
  id: string
  description: string
  shortDescription: string
  links: {
    github: string
    demo: string
  },
  technologies: string[]
}