import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from '@pkdx-components/Root';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import { PokemonDetailsPage } from '@pkdx-components/Pages/PokemonPage';
import { PokemonListPage } from '@pkdx-components/Pages/PokemonListPage';

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
      <Route path="/" element={<Navigate to={'/pokemon-list/1'} />} />
      <Route path="/pokemon/:pokemon_name" element={<PokemonDetailsPage />} />
      <Route path="/pokemon-list/:page_number" element={<PokemonListPage />} />
      <Route path="*" element={<Navigate to={'/pokemon-list/1'} />} />
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
