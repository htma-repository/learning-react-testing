import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import CounterProvider from "./context/CounterProvider";

interface AllProvidersProps {
  children: React.ReactNode;
}

const AllProviders = ({ children }: AllProvidersProps) => {
  return <CounterProvider>{children}</CounterProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
