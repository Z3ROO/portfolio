import { ProjectMetadata } from "@/types/ProjectMetadataType";

const description = `
Focused on implement the minimum necessary to build a web app, this project "clones" the main functionality of react, featuring hooks like useState, useRef and useEffect, style prop for css styling and translating class attribute to className.

The current functionality makes possible to build an extensive web application and you'll find a classic todo-list as demonstration at the top.

Along with the template engine, the project includes all the necessary project creation and build tools commonly accompanying such frameworks/libraries.
`.trim();

const inboxMetadata: ProjectMetadata = {
  "name": "Miracle",
  priority: 0,
  "shortDescription": "A Javascript template engine just like React including project and build tools",
  description,
  "id": "miracle",
  "links": {
    "github": "https://github.com/z3roo/miracle",
    "demo": "https://miracle-test-app.vercel.app",
    "npm": "https://npmjs.com/package/@z3ro/miracle"
  },
  "technologies": [
    "typescript", "nodejs"
  ]
}


export default inboxMetadata;