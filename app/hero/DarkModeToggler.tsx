import { BsFillMoonFill } from "react-icons/bs";
import { useLayout } from "./LayoutContext";


export default function DarkModeToggler() {
  const layoutContext = useLayout();

  if (!layoutContext)
    return null;

  const { containerMarginSize } = layoutContext;

  return (
    <div className="fixed top-4 text-xl cursor-pointer transition-opacity duration-500" style={{
      right: `${containerMarginSize + 48}px`,
      opacity: containerMarginSize === 0 ? '0' : '1'
    }}>
      <BsFillMoonFill />
    </div>
  )
}