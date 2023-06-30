'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

type DashboardSections = 'Projects'|'Stats';

const li_TW = 'px-2 py-1 rounded-sm cursor-pointer ';

export default function SectionSwitcher({ children }: {children: ReactNode}) {
  const router = useRouter();
  const [tab, setTab] = useState<DashboardSections>('Projects');
  const ulRef = useRef<HTMLUListElement>(null);
  const [shadowStyle, setShadowStyle] = useState<CSSProperties>({});

  useEffect(() => {
    if (!ulRef.current)
      return

    const tabs = ulRef.current.children;
    let currentTab = tabs.item(0)!;

    for(let child of tabs) {
      if (child.id === tab)
        currentTab = child
    }

    const ulCords = ulRef.current.getBoundingClientRect();
    const currentTabCords = currentTab.getBoundingClientRect();

    const shadowCordinates = {
      left: currentTabCords.left - ulCords.left
    }

    setShadowStyle(shadowCordinates);

  }, [tab]);

  const clickHandler = (section: DashboardSections) => {
    return (event: MouseEvent<HTMLLIElement>) => {
      setTab(section);
      router.push('/dashboard/'+section.toLocaleLowerCase());
    }
  }

  return (
    <div>
      <div className="p-1 border border-white rounded-sm w-min mx-auto">
        <ul className="relative flex rounded-sm" ref={ulRef}>
          <li id="Projects" className={li_TW+`z-10`} onClick={clickHandler('Projects')}>Projects</li>
          <li id="Stats" className={li_TW+`z-10`} onClick={clickHandler('Stats')}>Stats</li>
          <li className={li_TW+`absolute top-0 left-0 bg-red-500 rounded-sm transition-all z-0`} style={shadowStyle}>
            <span className="text-opacity-0 text-white">{tab}</span>
          </li>
        </ul>
      </div>
      {children}
    </div>
  )
}