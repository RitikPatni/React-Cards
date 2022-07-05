import { render, screen } from "@testing-library/react";
import App from "./App";
import Card from "./components/Card";

test("renders add card button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Activate Cards/i);
  expect(linkElement).toBeInTheDocument();
});

test("if card contains user name", () => {
  render(
    <Card
      card_name="Test User"
      card_last_four="abcd"
      colour="#1FCD8E"
      expiry="11/32"
    />
  );
  const linkElement = screen.getByText(/Test User/i);
  expect(linkElement).toBeInTheDocument();
});

test("if card contains expiry", () => {
  render(
    <Card
      card_name="Test User"
      card_last_four="abcd"
      colour="#1FCD8E"
      expiry="11/32"
    />
  );
  const linkElement = screen.getByText(/32/i);
  expect(linkElement).toBeInTheDocument();
});
