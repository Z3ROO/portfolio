const description = `
The Inbox is for depositing everything that comes into mind that is or might be valuable to take action or revisit for later actions.

Is a simple queue of documents, which I call draft, where I have to pass through all of them until the last added draft. Any draft can be delayed for days, weeks or months giving space for what matters in the present.

From the inbox, to-dos can be created but also created directly. Theres also a goals section that serves as a compass to achieve long term goals setting highlevel tasks.
`.trim();

const inboxMetadata = {
  "name": "Inbox",
  "shortDescription": "Inspired by GTD inbox, this is a personal product for organizing ideas and goals.",
  "id": "inbox",
  "links": {
    "github": "https://github.com/z3roo/yoriichi",
    "demo": ""
  },
  "technologies": [
    "typescript", "reactjs", "react-query", "tailwindcss", "nodejs", "expressjs", "mongodb", "jest"
  ]
}


export default inboxMetadata;