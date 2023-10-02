import { ProjectMetadata } from "@/types/ProjectMetadataType";

const description = `
Designed to showcase my projects and skills this was my previous portfolio. 

I've decided to rebuild it so I could have a chance (as an excuse) to work with NextJS 13 App Router since this version of my portfolio is a complete SPA with no static or server rendering.

Its completelly responsive and most of the features are finished...
`.trim();

const inboxMetadata: ProjectMetadata = {
  "name": "Old Portfolio",
  priority: 2,
  "shortDescription": "My old portfolio, built as an SPA completelly responsive to all screens.",
  description,
  "id": "old-portfolio",
  "links": {
    "github": "https://github.com/z3roo/old-portfolio",
    "demo": "https://old-portfolio-gamma.vercel.app/"
  },
  "technologies": [
    "typescript", "reactjs", "tailwindcss", "nodejs", "expressjs"
  ]
}


export default inboxMetadata;