import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from '@pkdx-components/Root';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { PokemonView } from '@pkdx-components/dev/Pokemon';

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/pokemon/:pokemon_name" element={<PokemonView />} />
    </Route>
  )
);

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(getRootElement());
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
});
