/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { useRef, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useLayout } from "./LayoutContext";
import { AnimateName, AnimateSurname, AnimateTitle, AnimateGithubIcon, AnimateLinkedinIcon } from "./animations/hero";
import useIntersectionObserver from "../../util/useIntersectionObserver";

export default function Hero() {
  const layoutContext = useLayout();

  if (!layoutContext)
    return null;

  const { containerMarginSize } = layoutContext;

  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="flex flex-col sm:flex-row mb-24">
        <NameAndTitle containerMarginSize={containerMarginSize} />
        <SocialIcons containerMarginSize={containerMarginSize} />      
      </div>
    </div>
  )
}

function NameAndTitle({ containerMarginSize }:{containerMarginSize: number}) {
  const h1NameRef = useRef<HTMLHeadingElement>(null);
  const h1DivNameRef = useRef<HTMLDivElement>(null);
  
  const h1SurnameRef = useRef<HTMLHeadingElement>(null);
  const h1DivSurnameRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLParagraphElement>(null);
  const titleDivRef = useRef<HTMLDivElement>(null);

  const nameInterObs = useIntersectionObserver(h1DivNameRef, { threshold: 1 , rootMargin: '-96px 0px 0px 0px', above: 96 });
  const surnameInterObs = useIntersectionObserver(h1DivSurnameRef, { threshold: 1 , rootMargin: '-96px 0px 0px 0px', above: 96 });
  const titleInterObs = useIntersectionObserver(titleDivRef, { threshold: 1 , rootMargin: '-96px 0px 0px 0px', above: 96 });

  useEffect(() => {
    if (!h1NameRef.current || !containerMarginSize)
      return;
    
    const h1 = h1NameRef.current!;
    AnimateName(h1, nameInterObs, containerMarginSize)
    
  },[h1NameRef.current, nameInterObs, containerMarginSize]);

  useEffect(() => {
    if (!h1SurnameRef.current || !containerMarginSize)
      return;
    
    const h1 = h1SurnameRef.current!;
    AnimateSurname(h1, surnameInterObs, containerMarginSize);

  },[h1SurnameRef.current, surnameInterObs, containerMarginSize]);

  useEffect(() => {
    if (!titleRef.current || !containerMarginSize)
      return;

    const title = titleRef.current;
    AnimateTitle(title, titleInterObs, containerMarginSize)

  }, [titleRef.current, titleInterObs]);

  return (
    <div className="relative select-none">
      <div className="h-16 sm:h-20 md:h-28 lg:h-36 relative z-10"  ref={h1DivNameRef}>
        <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl transition-all duration-300" ref={h1NameRef}>Pedro </h1>
        <span className="invisible">.</span>
      </div>
      <div className="h-16 sm:h-20 md:h-28 lg:h-36 relative z-10" ref={h1DivSurnameRef}>
        <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl transition-all duration-300" ref={h1SurnameRef}>Ribeiro</h1>
        <span className="invisible">.</span>
      </div>
      <div ref={titleDivRef} className="h-12 relative z-10">
        <p ref={titleRef} className="transition-all duration-300 text-base md:text-xl lg:text-2xl">A software engineer specialized in web technologies.</p>
        <span className="invisible">.</span>
      </div>
      <div
          style={{
            background: 'radial-gradient(circle, rgba(248, 113, 113, 0.055) 11%, rgba(248, 113, 113, 0) 66%)',
            opacity: nameInterObs !== 'above' ? '1' : '0'
          }}
          className="noise absolute top-0 right-full -translate-y-1/3 translate-x-1/2 w-[750px] h-[750px] rounded-full transition-opacity duration-500"
        />
        <div 
          style={{
            background: 'radial-gradient(circle, rgba(248, 113, 113, 0.075) 11%, rgba(248, 113, 113, 0) 66%)',
            opacity: surnameInterObs !== 'above' ? '1' : '0'
          }} 
          className="noise absolute top-0 right-0 -translate-y-1/4 translate-x-1/3 w-[900px] h-[900px] rounded-full transition-opacity duration-500"
        />
    </div>
  )
}

function SocialIcons({ containerMarginSize }:{containerMarginSize: number}) {
  const githubRef = useRef<HTMLDivElement>(null);
  const githubDivRef = useRef<HTMLDivElement>(null);

  const linkedinRef = useRef<HTMLDivElement>(null);
  const linkedinDivRef = useRef<HTMLDivElement>(null);

  const githubInterObs = useIntersectionObserver(githubDivRef, { threshold: 1 , rootMargin: '-96px 0px 0px 0px', above: 96 });
  const linkedinInterObs = useIntersectionObserver(linkedinDivRef, { threshold: 1 , rootMargin: '-96px 0px 0px 0px', above: 96 });

  useEffect(() => {
    if (!githubRef.current || !containerMarginSize)
      return;
    
    const icon = githubRef.current!;
    AnimateGithubIcon(icon, githubInterObs, containerMarginSize);
  },[githubRef.current, githubInterObs, containerMarginSize]);

  useEffect(() => {
    if (!linkedinRef.current || !containerMarginSize)
      return;
    
    const icon = linkedinRef.current!;
    AnimateLinkedinIcon(icon, linkedinInterObs, containerMarginSize);

  },[linkedinRef.current, linkedinInterObs, containerMarginSize]);

  return (
    <div className="pl-28 relative z-10 flex flex-row sm:flex-col">
      <div className="h-9 mx-6 sm:mx-0 my-6" ref={githubDivRef}>
        <div className="text-4xl text-red-400 cursor-pointer transition-all duration-300" ref={githubRef}>
          <a href="https://www.github.com/z3roo" target="_blank"><BsGithub/></a>
        </div>
        <span className="invisible">.</span>
      </div>
      <div className="h-9 mx-6 sm:mx-0 my-6" ref={linkedinDivRef}>
        <div className="text-4xl text-red-400 cursor-pointer transition-all duration-300" ref={linkedinRef}>
          <a href="https://www.linkedin.com/in/pedro-ribeiro-aa598318a" target="_blank"><BsLinkedin /></a>
        </div>
        <span className="invisible">.</span>
      </div>
    </div>
  )
}