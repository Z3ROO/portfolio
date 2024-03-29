export interface ProjectMetadata {
  name: string
  priority: number
  id: string
  description: string
  shortDescription: string
  links: {
    github: string
    demo?: string
    npm?: string
  },
  technologies: string[]
}