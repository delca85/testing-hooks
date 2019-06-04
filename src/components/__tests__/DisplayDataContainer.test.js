import React from "react";
import { render, fireEvent } from "react-testing-library";
import DisplayDataContainer from "../DisplayDataContainer";
import DisplayData from "../DisplayData";

jest.mock("../DisplayData", () => ({
    __esModule: true,
    default: jest.fn(() => <div />),
}));

describe("DisplayDataContainer Component", () => {
    it("should set prop right to DisplayData if a new input is written", () => {
        const { container } = render(<DisplayDataContainer />);
        const inputValue = "pippo";
        const input = container.querySelector("input");
        fireEvent.change(input, { target: { value: inputValue } });

        expect(DisplayData).toBeCalledWith({ query: inputValue }, {});
    });
});
