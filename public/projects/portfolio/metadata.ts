import { ProjectMetadata } from "@/types/ProjectMetadataType";

const description = `
Designed to be a catalog of projects this portfolio showcase my creations counting with a dedicated page for each project where a technical description of it's functionality and interesting points can be showed. The projects can be sorted and filtered by multiple categories.

Lavaraging NextJs to build a fully static web application with minor exceptions for better interactivity.
`.trim();

const portfolioMetadata: ProjectMetadata = {
  "name": "Portfolio",
  priority: 4,
  "shortDescription": " My personal portfolio, designed to be a catalog of projects.",
  description,
  "id": "portfolio",
  "links": {
    "github": "https://github.com/z3roo/portfolio",
    "demo": "https://przero.vercel.app"
  },
  "technologies": [
    "typescript", "nextjs"
  ]
}

export default portfolioMetadata;