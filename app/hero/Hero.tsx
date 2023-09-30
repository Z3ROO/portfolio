/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useLayout } from "./LayoutContext";
import { AnimateName, AnimateSurname, AnimateTitle, AnimateGithubIcon, AnimateLinkedinIcon } from "./animations/hero";
import useIntersectionObserver from "./useIntersectionObserver";

export default function Hero() {
  const layoutContext = useLayout();

  if (!layoutContext)
    return null;

  const { containerMarginSize } = layoutContext;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-row mb-24">
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

  const pedroInterObs = useIntersectionObserver(h1DivNameRef, { threshold: 1 , rootMargin: '-96px 0px 0px 0px', above: 96 });
  const surnameInterObs = useIntersectionObserver(h1DivSurnameRef, { threshold: 1 , rootMargin: '-96px 0px 0px 0px', above: 96 });
  const titleInterObs = useIntersectionObserver(titleDivRef, { threshold: 1 , rootMargin: '-96px 0px 0px 0px', above: 96 });

  useEffect(() => {
    if (!h1NameRef.current || !containerMarginSize)
      return;
    
    const h1 = h1NameRef.current!;
    AnimateName(h1, pedroInterObs, containerMarginSize)
    
  },[h1NameRef.current, pedroInterObs, containerMarginSize]);

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
    <div>
      <div className="h-36"  ref={h1DivNameRef}>
        <h1 className="font-bold text-9xl transition-all duration-300" ref={h1NameRef}>Pedro </h1>
        <span className="invisible">.</span>
      </div>
      <div className="h-36 " ref={h1DivSurnameRef}>
        <h1 className="font-bold text-9xl transition-all duration-300" ref={h1SurnameRef}>Ribeiro</h1>
        <span className="invisible">.</span>
      </div>
      <div ref={titleDivRef} className="h-12">
        <p ref={titleRef} className="transition-all duration-300 text-2xl">A software engineer specialized in web technologies.</p>
        <span className="invisible">.</span>
      </div>
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
    <div className="pl-28">
      <div className="h-9 my-12" ref={githubDivRef}>
        <div className="text-4xl text-red-400 transition-all duration-300" ref={githubRef}>
          <BsGithub/>
        </div>
        <span className="invisible">.</span>
      </div>
      <div className="h-9 my-12" ref={linkedinDivRef}>
        <div className="text-4xl text-red-400 transition-all duration-300" ref={linkedinRef}>
          <BsLinkedin />
        </div>
        <span className="invisible">.</span>
      </div>
    </div>
  )
}