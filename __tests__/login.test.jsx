/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/login";
import { server } from "../mocks/server";

// Rest Libary
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  window.localStorage.removeItem("token");
});
afterAll(() => server.close());

describe("Login", () => {
  it("Testing Components", () => {
    render(<Login />);

    const heading = screen.getByText("Login WooBridge!");
    const inputEmail = screen.getByRole("textbox", {
      name: /email address/i,
    });
    const inputPassword = screen.getByLabelText(/password/i);

    const btnLogin = screen.getByRole("button", {
      name: "Login",
    });

    expect(heading).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnLogin).toBeInTheDocument();
  });

  it("Testing Login Process", () => {
    render(<Login />);

    // fill out the form
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "hendar@clodeo.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "admin123" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: "Login",
      }
    ))

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(/Passwords do not match./i)

  });
});
