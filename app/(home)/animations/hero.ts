interface AnimationCache {
  x: number
  y: number
  state: 'above'|'in'|'below'
}


interface AnimationCacheGroup {
  [key: string]: AnimationCache
}

const animationCache: AnimationCacheGroup = {
  name: {y: 0, x: 0, state: 'in' },
  surname : {y: 0, x: 0, state: 'in' },
  title : {y: 0, x: 0, state: 'in' },
  github : {y: 0, x: 0, state: 'in' },
  linkedin : {y: 0, x: 0, state: 'in' }
}

export function AnimateName(
  h1: HTMLHeadingElement, 
  nameInterObs: 'above'|'in'|'below', 
  containerMarginSize: number
  ) {
  const h1Pos = h1.getBoundingClientRect();

    if (nameInterObs === 'above' && animationCache['name'].state !== 'above') {

      animationCache['name'] = {y: h1Pos.y, x: h1Pos.x, state: 'above'};

      h1.style.top = `${h1Pos.y}px`;
      h1.style.left = `${h1Pos.x}px`;
      h1.style.position = 'fixed';
      h1.style.fontSize = `${1.5}rem`;
      h1.style.lineHeight = `${2}rem`;

      setTimeout(() => {
        h1.style.left = `${containerMarginSize! + 48}px`
        h1.style.top = `${12}px`
      }, 100)
    }
    else if (nameInterObs !== 'above' && animationCache['name'].state !== 'in') {
      
      h1.style.top = `${animationCache['name'].y}px`;
      h1.style.left = `${animationCache['name'].x}px`;
      animationCache['name'].state = 'in';
      
      setTimeout(() => {
        h1.style.fontSize = '';
        h1.style.lineHeight = '';
        h1.style.position = 'static';
      }, 100);
    }
}

export function AnimateSurname(
    h1: HTMLHeadingElement, 
    surnameInterObs: 'above'|'in'|'below', 
    containerMarginSize: number
  ) {
  const h1Pos = h1.getBoundingClientRect();

    if (surnameInterObs === 'above' && animationCache['surname'].state !== 'above') {
      animationCache['surname'] = {y: h1Pos.y, x: h1Pos.x, state: 'above'};

      h1.style.top = `${h1Pos.y}px`;
      h1.style.left = `${h1Pos.x}px`;
      h1.style.position = 'fixed';
      h1.style.fontSize = `${1.5}rem`;
      h1.style.lineHeight = `${2}rem`;

      setTimeout(() => {
        h1.style.left = `${containerMarginSize! + 120}px`
        h1.style.top = `${12}px`
      }, 100)
    }
    else if (surnameInterObs !== 'above' && animationCache['surname'].state !== 'in') {
      
      h1.style.top = `${animationCache['surname'].y}px`;
      h1.style.left = `${animationCache['surname'].x}px`;
      animationCache['surname'].state = 'in';
      
      setTimeout(() => {
        h1.style.fontSize = '';
        h1.style.lineHeight = '';
        h1.style.position = '';
      }, 100);
    }
}

export function AnimateTitle(
    title: HTMLParagraphElement, 
    titleInterObs: 'above'|'in'|'below', 
    containerMarginSize: number
  ) {
    const titlePos = title.getBoundingClientRect();

    if (titleInterObs === 'above' && animationCache['title'].state !== 'above') {
      animationCache['title'] = {y: titlePos.y, x: titlePos.x, state: 'above'};

      title.textContent = 'Software engineer';
      title.style.top = `${titlePos.y}px`;
      title.style.left = `${titlePos.x}px`;
      title.style.position = 'fixed';

      setTimeout(() => {
        title.style.fontSize = `${1}rem`;
        title.style.lineHeight = `${1.5}rem`;
        title.style.top = `${17}px`;
        title.style.left = `${containerMarginSize! + 212}px`;
      }, 100)
    }
    else if (titleInterObs !== 'above' && animationCache['title'].state !== 'in') {
      animationCache['title'].state = 'in';

      title.style.top = `${animationCache['title'].y}px`;
      title.style.left = `${animationCache['title'].x}px`;

      setTimeout(() => {
        title.textContent = 'A software engineer specialized in web technologies.';
        title.style.position = ''
        title.style.fontSize = '';
        title.style.lineHeight = '';
      }, 100)
    }
}

export function AnimateGithubIcon(
    icon: HTMLDivElement, 
    iconInterObs: 'above'|'in'|'below', 
    containerMarginSize: number
  ) {
  const iconPos = icon.getBoundingClientRect();

    if (iconInterObs === 'above' && animationCache['github'].state !== 'above') {
      animationCache['github'] = {y: iconPos.y, x: iconPos.x, state: 'above'};

      icon.style.top = `${iconPos.y}px`;
      icon.style.left = `${iconPos.x}px`;
      icon.style.position = 'fixed';
      icon.style.fontSize = `${1.25}rem`
      icon.style.lineHeight = `${1.75}rem`

      setTimeout(() => {
        icon.style.left = `calc(100% - ${containerMarginSize! + (iconPos.width*2) + 48 + 32}px)`
        icon.style.top = `${16}px`
      }, 100)
    }
    else if (iconInterObs !== 'above' && animationCache['github'].state !== 'in') {
      
      icon.style.top = `${animationCache['github'].y}px`;
      icon.style.left = `${animationCache['github'].x}px`;
      animationCache['github'].state = 'in';
      
      setTimeout(() => {
        icon.style.fontSize = '';
        icon.style.lineHeight = '';
        icon.style.position = '';
      }, 100);
    }
}

export function AnimateLinkedinIcon(
    icon: HTMLDivElement, 
    iconInterObs: 'above'|'in'|'below', 
    containerMarginSize: number
  ) {
    const iconPos = icon.getBoundingClientRect();

    if (iconInterObs === 'above' && animationCache['linkedin'].state !== 'above') {
      animationCache['linkedin'] = {y: iconPos.y, x: iconPos.x, state: 'above'};

      icon.style.top = `${iconPos.y}px`;
      icon.style.left = `${iconPos.x}px`;
      icon.style.position = 'fixed';
      icon.style.fontSize = `${1.25}rem`
      icon.style.lineHeight = `${1.75}rem`

      setTimeout(() => {
        icon.style.left = `calc(100% - ${containerMarginSize! + iconPos.width + 48 + 32}px)`
        icon.style.top = `${16}px`
      }, 100)
    }
    else if (iconInterObs !== 'above' && animationCache['linkedin'].state !== 'in') {
      
      icon.style.top = `${animationCache['linkedin'].y}px`;
      icon.style.left = `${animationCache['linkedin'].x}px`;
      animationCache['linkedin'].state = 'in';
      
      setTimeout(() => {
        icon.style.fontSize = '';
        icon.style.lineHeight = '';
        icon.style.position = '';
      }, 100);
    }
}