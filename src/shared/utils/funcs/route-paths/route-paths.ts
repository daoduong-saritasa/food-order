import { buildRoutePaths } from './build-route-paths';

const baseRoutePaths = buildRoutePaths({
  root: { path: '' },
} as const);

const pageRoutePaths = buildRoutePaths({
  home: {
    path: '/',
  },
  suppliers: {
    path: 'suppliers',
    children: {
      detail: {
        path: ':id',
      },
    },
  },
} as const);

/** Route paths can be used throughout the project. */
export const routePaths = {
  ...baseRoutePaths,
  ...pageRoutePaths,
};
