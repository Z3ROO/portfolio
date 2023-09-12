import { Button } from "@/components/Button";
import {BsArrowLeftSquare} from 'react-icons/bs';

export default function NotFound() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <div className="flex flex-col items-end select-none">
          <h1 className="text-8xl font-bold text-red-400">404</h1>
          <h3 className="text-4xl text-red-400">Resource not found.</h3>
          <div className="w-2/3 text-right">
            <p className="text-xl text-red-500 my-12">But you can always finde me at: <span className="font-bold text-red-600 select-text">pedroribeiro.zero@gmail.com</span></p>
          </div>
        </div>
        <div>
          <Button href="/"><BsArrowLeftSquare className="inline mr-2" />Back home</Button>
        </div>
      </div>
    </div>
  )
}