import ClientBackBTN from "@/components/clientBackBtn";
import { ReactNode } from "react";

export default function InterpectedProjectPage({children}: {children: ReactNode}) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-20 bg-gray-800 bg-opacity-30" style={{backdropFilter: 'blur(4px)'}}>
      <div className="h-5/6 w-11/12 bg-gray-800 bg-opacity-90 relative" style={{ backdropFilter:'blur(4px)' }}>
        <div className="absolute top-4 left-4 z-20 ">
          <ClientBackBTN />
        </div>
        {children}
      </div>
    </div>
  );
}
