import { ProjectMetadata } from "@/util/ProjectMetadataType";

const description = `
A fully functional Sudoku game with an in-house board generator for always-valid puzzles. 

This game boasts an interactive user interface and incorporates common functionalities found in Sudoku games, including the ability to undo and redo changes, make note of candidate numbers for cells, and more
`.trim();

const sudokuMetadata: ProjectMetadata = {
  "name": "Sudoku",
  "shortDescription": " An authentic Sudoku game featuring an in-house board generator for always valid puzzles.",
  description,
  "id": "sudoku",
  "links": {
    "github": "https://github.com/z3roo/sudoku",
    "demo": "https://sudoku-przero.vercel.app/"
  },
  "technologies": [
    "typescript", "reactjs", "nodejs", "styled-components"
  ]
}


export default sudokuMetadata