import Image from "next/image";

export default function CustomBody() {
  return (
    <div>
      <h4 className="text-5xl font-bold py-12">Interactivity</h4>
      <div className="flex p-6">
        <Image src={'/projects/sudoku/assets/completion-animation.gif'} width={394} height={394} alt="completion-animation"/>
        <div className="p-8">
          <p className="text-3xl text-justify pb-6">Cel animations shows when a row, column or box is correctly completed always parting from the last cel filled.</p>
          <p className="text-3xl text-justify pb-6">When multiple sections gets completed at the same time they get sinchronized as one.</p>
        </div>
      </div>
      <h4 className="text-5xl font-bold py-12">Board generator</h4>
      <p className="py-2 text-xl text-justify">The whole algorithm is based on parallel swaps, each sell is randomly pre-filled from 1 to 9 with the only constraint being that all the cels in each box must have an unique number from 1 through 9 per box. </p>
      <div className="flex p-6">
        <div className="p-8 text-xl">
          <p className="pb-6 text-justify">The swaps happens switching from row to column back and forth going through each cel and if the current row have repeated numbers it tries to swap with one of the parallel cel.</p>
          <p className="pb-6 text-justify">If the if both of the parallel cels is already in the row, then one of the two (or one) is randomly chosen.</p>
          <p className="pb-6 text-justify">After the swap the algorithm jumps the other repeating number and tries the same thing until the row have only unique numbers from 1 to 9.</p>
        </div>
        <Image src={'/projects/sudoku/assets/algo-hori.jpg'} width={400} height={400} alt="completion-animation"/>
      </div>
      <div className="flex p-6">
        <Image src={'/projects/sudoku/assets/algo-vert.jpg'} width={400} height={400} alt="completion-animation"/>
        <div className="p-8 text-xl">
          <p className="pb-6 text-justify">Once a row is completed it goes to a column applying the same concept.</p>
          <p className="pb-6 text-justify">Since the swaps only happens in parallel and alwais from top left to bottom right, when sorting a column does not unsort a row and vice versa.</p>
          <p className="pb-6 text-justify">And also the third, sixth and nineth rows and columns are alwais sorted by previews two.</p>
        </div>
      </div>
    </div>
  )
}