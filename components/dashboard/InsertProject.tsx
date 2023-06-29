'use client'

import { useState } from "react";

const input_TW = 'text-black w-full';
const label_TW = 'flex flex-col p-2 w-full';

export function InsertProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <form id="insert-project" onSubmit={async (e) => {
      e.preventDefault();
      const request = await fetch('/api/projects', {
        method: 'post',
        body: JSON.stringify({
          name, description
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });

      const response = await request.json();
    }} className="flex flex-col items-start p-2 w-96 border border-white rounded-sm">
      <label className={label_TW+``}>
        <span>Name:</span>
        <input className={input_TW+``} type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label className={label_TW+``}>
        <span>Description:</span>
        <textarea className={input_TW+` h-24 resize-none`} value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button className="m-2" form="insert-project">Insert</button>
    </form>
  );
}
