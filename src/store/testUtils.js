import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/Slices/authSlice'; // Adjust path

export function render(ui, { preloadedState = {}, ...renderOptions } = {}) {
  const store = configureStore({
    reducer: { auth: authReducer },
    preloadedState,
  });
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
export * from '@testing-library/react';