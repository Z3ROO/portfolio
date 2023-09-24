'use client'

import hljs from 'highlight.js';

export default function HighlightJs({code, language}: {code: string, language: string}) {
  return <div className='javascript dark' dangerouslySetInnerHTML={{__html: hljs.highlight(code, {language}).value}}/>
}