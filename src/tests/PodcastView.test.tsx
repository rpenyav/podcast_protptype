import React from "react";
import { render, screen } from "@testing-library/react";
import PodcastView from "pages/PodcastView";

test("renders PodcastView", () => {
  render(<PodcastView />);
  const linkElement = screen.getByText(/Podcast View/i);
  expect(linkElement).toBeInTheDocument();
});
