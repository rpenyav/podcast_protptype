import React from "react";
import { render, screen } from "@testing-library/react";
import PodcastSearch from "pages/PodcastSearch";

test("renders PodcastSearch", () => {
  render(<PodcastSearch />);
  const linkElement = screen.getByText(/Podcast Search/i);
  expect(linkElement).toBeInTheDocument();
});
