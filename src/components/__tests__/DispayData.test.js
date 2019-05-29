import React from "react";
import { render, fireEvent } from "react-testing-library";
import { act } from "react-dom/test-utils";
import axios from "axios";
import DisplayData from "../DisplayData";

jest.mock("axios");
const FAKE_HITS = [
    { id: 1, url: "pippoUrl", title: "pippo" },
    { id: 2, url: "plutoUrl", title: "pluto" },
];

describe("DisplayData Component", () => {
    it("should show no data if not query props is set", () => {
        const mockedOnQueryChange = jest.fn();
        const { container } = render(
            <DisplayData onQueryChange={mockedOnQueryChange} />,
        );
        const liCounts = container.querySelectorAll("li");
        expect(liCounts.length).toBe(0);
    });

    it("should show new entries when query is set", () => {
        axios.get.mockResolvedValue({ data: { hits: FAKE_HITS } });
        const { container } = render(<DisplayData query='pippo' />);
        const liCounts = container.querySelectorAll("li");
        expect(liCounts.length).toBe(2);
    });

    it("should dispatch onQueryChange when new input is set", () => {
        const mockedOnQueryChange = jest.fn();
        const { container } = render(
            <DisplayData onQueryChange={mockedOnQueryChange} />,
        );
        const input = container.querySelector("input");
        fireEvent.change(input, { target: { value: "pippo" } });
        expect(mockedOnQueryChange).toHaveBeenCalledTimes(1);
        expect(mockedOnQueryChange).toHaveBeenCalledWith("pippo");
    });
});
