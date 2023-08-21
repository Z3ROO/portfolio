import Image from "next/image";

export default function CustomBody() {
  return (
    <div>
      <div className="flex py-6">
        <Image src={'/projects/sudoku/assets/completion-animation.gif'} width={394} height={394} alt="completion-animation"/>
        <div className="p-4">
          <p className="p-4 text-3xl">Cel animations shows when a row, column or box is correctly completed always parting from the last cel filled.</p>
          <p className="p-4 text-3xl">When multiple sections gets completed at the same time they get sinchronized as one.</p>
        </div>
      </div>
      <h4 className="text-4xl font-bold px-2 py-12">Board generator algorithm</h4>
      <p className="px-4 py-2 text-2xl">The whole algorithm is based on parallel swaps, each sell is randomly pre-filled from 1 to 9. </p>
      <p className="px-4 py-2 text-2xl">The only constraint is that all the boxes need to have a unique number from 1 to 9. </p>
      <div className="flex py-6">
        <div className="p-4 text-xl">
          <p className="p-4">The swaps happens switching from row to column back and forth going through each cel and if the current row have repeated numbers it tries to swap with one of the parallel cel.</p>
          <p className="p-4">If the if both of the parallel cels is already in the row, then one of the two (or one) is randomly chosen.</p>
          <p className="p-4">After the swap the algorithm jumps the other repeating number and tries the same thing until the row have only unique numbers from 1 to 9.</p>
        </div>
        <Image src={'/projects/sudoku/assets/algo-hori.jpg'} width={400} height={400} alt="completion-animation"/>
      </div>
      <div className="flex py-6">
        <Image src={'/projects/sudoku/assets/algo-vert.jpg'} width={400} height={400} alt="completion-animation"/>
        <div className="p-4 text-xl">
          <p className="p-4">Once a row is completed it goes to a column applying the same concept.</p>
          <p className="p-4">Since the swaps only happens in parallel and alwais from top left to bottom right, when sorting a column does not unsort a row and vice versa.</p>
          <p className="p-4">And also the third, sixth and nineth rows and columns are alwais sorted by previews two.</p>
        </div>
      </div>
    </div>
  )
}