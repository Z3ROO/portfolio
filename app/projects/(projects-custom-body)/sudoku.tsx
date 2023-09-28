import { SectionH2 } from "@/components/project/custom-body/Section";
import TextAndImageBlock from "@/components/project/custom-body/TextAndImageBlock";
import Text from "@/components/project/custom-body/Text";

export default function CustomBody() {
  return (
    <div>
      <SectionH2 title={'Interactivity'}>
        <TextAndImageBlock img="/projects/sudoku/assets/completion-animation.gif" alt="completion-animation">
          {[
            "Cel animations shows when a row, column or box is correctly completed always parting from the last cel filled.",
            "When multiple sections gets completed at the same time they get sinchronized as one."
          ]}
        </TextAndImageBlock>
      </SectionH2>
      <SectionH2 title="Board generator">
        <Text>{[
          'The whole algorithm is based on parallel swaps.',
          'To start, each cel is randomly pre-filled with a unique number from 1 to 9 per box. At this point, from a box perspective, the board is correctly sorted.',
          ' Now, we need to sort rows and columns.'
        ]}</Text>
        <TextAndImageBlock reverse img="/projects/sudoku/assets/algo-hori.jpg">
          {[
            "The swaps happens switching from row to column back and forth going through each cel. If the current row have repeated numbers it tries to swap with one of the parallel cels.",
            "If both of the parallel cels is already in the row, then one of the two (or one) is randomly chosen.",
            "After the swap, the algorithm jumps to the other repeating number and tries the same process until the row has only unique numbers from 1 to 9."
          ]}
        </TextAndImageBlock>
        <TextAndImageBlock img="/projects/sudoku/assets/algo-vert.jpg">
          {[
            "Once a row is completed, it goes to a column applying the same concept.",
            "Since the swaps only happens in parallel and always from top left to bottom right, when sorting a column does not unsort a row and vice versa.",
            "Also the third, sixth, and ninth rows and columns are always sorted by consequence."
          ]}
        </TextAndImageBlock>
      </SectionH2>
    </div>
  )
}