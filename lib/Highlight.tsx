'use client'

import hljs from 'highlight.js';

export default function HighlightJs({code}: {code: string}) {
  return <div className='javascript dark' dangerouslySetInnerHTML={{__html: hljs.highlight(code, {language: 'javascript'}).value}}/>
}