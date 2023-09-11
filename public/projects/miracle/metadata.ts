import { ProjectMetadata } from "@/types/ProjectMetadataType";

const description = `
Focused on implement the minimun necessary to build an web app, this project "clones" the main functionality of react featuring hooks like useState, useRef and useEffect, style prop for css styling and class prop to className trasnlation.

Typingin the whole project would be unnecessary since this is an intended naive implementation hence only hooks are typed.

The current functionality makes possible to build an extensive web application if not considering the performance issues and you'll find a demo app at the top of this page.
`.trim();

const inboxMetadata: ProjectMetadata = {
  "name": "Miracle",
  priority: 0,
  "shortDescription": "A clone of React.js engine featuring function components, hooks, etc.",
  description,
  "id": "miracle",
  "links": {
    "github": "https://github.com/z3roo/miracle",
    "demo": "miracle-test-app.vercel.app",
    "npm": "https://npmjs.com/package/@z3ro/miracle"
  },
  "technologies": [
    "typescript", "nodejs"
  ]
}


export default inboxMetadata;