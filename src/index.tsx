import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './components/Root';

function getRootElement() {
  const existing_el = document.getElementById('root');
  if (existing_el) {
    return existing_el;
  }

  const new_el = document.createElement('div');
  new_el.id = 'root';
  document.body.appendChild(new_el);

  return new_el;
}

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(getRootElement());
  root.render(<Root />);
});
