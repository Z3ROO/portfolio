import Section from "@/components/project/custom-body/Section";
import TextAndImageBlock from "@/components/project/custom-body/TextAndImageBlock";

export default function CustomBody() {
  return (
    <div>
      <Section title={'Interactivity'}>
        <TextAndImageBlock img="/projects/sudoku/assets/completion-animation.gif" alt="completion-animation">
          {[
            "Cel animations shows when a row, column or box is correctly completed always parting from the last cel filled.",
            "When multiple sections gets completed at the same time they get sinchronized as one."
          ]}
        </TextAndImageBlock>
      </Section>
      <Section title="Board generator">
        <p className="py-2 text-xl text-justify">The whole algorithm is based on parallel swaps, each sell is randomly pre-filled from 1 to 9 with the only constraint being that all the cels in each box must have an unique number from 1 through 9 per box. </p>
        <TextAndImageBlock reverse img="/projects/sudoku/assets/algo-hori.jpg">
          {[
            "The swaps happens switching from row to column back and forth going through each cel and if the current row have repeated numbers it tries to swap with one of the parallel cel.",
            "If the if both of the parallel cels is already in the row, then one of the two (or one) is randomly chosen.",
            "After the swap the algorithm jumps the other repeating number and tries the same thing until the row have only unique numbers from 1 to 9."
          ]}
        </TextAndImageBlock>
        <TextAndImageBlock img="/projects/sudoku/assets/algo-vert.jpg">
          {[
            "Once a row is completed it goes to a column applying the same concept.",
            "Since the swaps only happens in parallel and alwais from top left to bottom right, when sorting a column does not unsort a row and vice versa.",
            "And also the third, sixth and nineth rows and columns are alwais sorted by previews two."
          ]}
        </TextAndImageBlock>
      </Section>
    </div>
  )
}