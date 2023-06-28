'use client'

import { FormEvent, useState } from "react";

const input_TW = 'text-black';

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
      console.log(response)
    }}>
      <input className={input_TW+``} type="text" value={name} onChange={e => setName(e.target.value)} />
      <input className={input_TW+``} type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button form="insert-project">Insert</button>
    </form>
  );
}
