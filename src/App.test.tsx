import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

it("should open", async () => {
  const onSelect = vi.fn();

  render(<App onSelect={onSelect} />);

  expect(screen.getByText("Open menu")).toHaveAttribute("data-state", "closed");

  // Works
  fireEvent.click(screen.getByText("Open menu"));
  await waitFor(() => {
    expect(screen.getByText("Open menu")).toHaveAttribute("data-state", "open");
  });

  // Fails
  fireEvent.click(screen.getByText("React"));
  await waitFor(() => {
    expect(onSelect).toHaveBeenCalled();
  });
});
