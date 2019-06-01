import React from "react";
import { render, fireEvent } from "react-testing-library";
import DisplayDataContainer from "../DisplayDataContainer";

jest.mock("../DisplayData", () => ({ query }) => (
    <div data-testid='displayData'>{query}</div>
));

describe("DisplayDataContainer Component", () => {
    it("should set prop right to DisplayData if a new input is written", () => {
        const { container, getByTestId } = render(<DisplayDataContainer />);
        const inputValue = "pippo";
        const input = container.querySelector("input");
        fireEvent.change(input, { target: { value: inputValue } });
        expect(getByTestId("displayData")).toHaveTextContent(inputValue);
    });
});
