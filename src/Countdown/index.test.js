import { waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Countdown from ".";

const counterElement = () => screen.getByRole("timer", { name: "counter" });

const countdownButtonElement = () =>
  screen.getByRole("button", { name: /countdown/i });

const resetButtonElement = () => screen.getByRole("button", { name: /reset/i });

describe("Countdown", () => {
  describe("without any props", () => {
    it("renders counter", () => {
      render(<Countdown />);
      expect(counterElement()).toHaveTextContent(/^100$/);
    });

    it("renders countdown button", () => {
      render(<Countdown />);
      expect(countdownButtonElement()).toBeInTheDocument();
    });

    it("renders reset button", () => {
      render(<Countdown />);
      expect(resetButtonElement()).toBeInTheDocument();
    });

    it("counts down while clicking on the countdown button", () => {
      render(<Countdown />);

      userEvent.click(countdownButtonElement());

      expect(counterElement()).toHaveTextContent(/^99$/);
    });
  });

  describe("with a custom initialCount", () => {
    it("renders counter", () => {
      render(<Countdown initialCount={5} />);
      expect(counterElement()).toHaveTextContent(/^5$/);
    });

    it("renders countdown button", () => {
      render(<Countdown initialCount={5} />);
      expect(countdownButtonElement()).toBeInTheDocument();
    });

    it("renders reset button", () => {
      render(<Countdown initialCount={5} />);
      expect(resetButtonElement()).toBeInTheDocument();
    });

    it("counts down while clicking on the countdown button", () => {
      render(<Countdown initialCount={5} />);

      userEvent.click(countdownButtonElement());

      expect(counterElement()).toHaveTextContent(/^4$/);
    });

    describe("at 0", () => {
      it("does not change counter while clicking on the countdown button", () => {
        render(<Countdown initialCount={0} />);

        userEvent.click(countdownButtonElement());

        expect(counterElement()).toHaveTextContent(/^0$/);
      });
    });
  });

  describe("with a custom step", () => {
    it("renders counter", () => {
      render(<Countdown step={2} />);
      expect(counterElement()).toHaveTextContent(/^100$/);
    });

    it("renders countdown button", () => {
      render(<Countdown step={2} />);
      expect(countdownButtonElement()).toBeInTheDocument();
    });

    it("renders reset button", () => {
      render(<Countdown step={2} />);
      expect(resetButtonElement()).toBeInTheDocument();
    });

    it("counts down while clicking on the countdown button", () => {
      render(<Countdown step={2} />);
      userEvent.click(countdownButtonElement());

      expect(counterElement()).toHaveTextContent(/^98$/);
    });

    describe("and below 0", () => {
      it("displays 0, and not a negative number", () => {
        render(<Countdown step={2_123_456} />);
        userEvent.click(countdownButtonElement());
        expect(counterElement()).toHaveTextContent(/^0$/);
      });
    });
  });

  describe("while n-clicking button - and finish to 0", () => {
    it("displays 0, and not a negative number", () => {
      render(<Countdown step={50} />);
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^0$/);
    });

    it("does nothing while clicking countdown button", () => {
      render(<Countdown step={50} />);
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      expect(counterElement()).toHaveTextContent(/^0$/);
    });

    it("resets on reset button", () => {
      render(<Countdown step={50} />);
      userEvent.click(countdownButtonElement());
      userEvent.click(countdownButtonElement());
      userEvent.click(resetButtonElement());

      expect(counterElement()).toHaveTextContent(/^100$/);
    });
  });
});
