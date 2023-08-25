import { ProjectMetadata } from "@/util/ProjectMetadataType";

const description = `
A simple command line tool maker. All that CLIM does is to parse argv parameters and organizing commands, subcommands and flags.

The tool is created as simple function that receive the parameters passed as argv arguments.
`.trim();

const climMetadata: ProjectMetadata = {
  "name": "CLI Maker",
  "shortDescription": "  A simple command line tool maker that parses and organize the arguments passed through argv.",
  description,
  "id": "clim",
  "links": {
    "github": "https://github.com/z3roo/clim",
    "demo": "https://www.npmjs.com/package/@z3ro/clim"
  },
  "technologies": [
    "typescript", "nodejs"
  ]
}


export default climMetadata