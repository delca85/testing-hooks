import React from "react";
import { render } from "react-testing-library";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import axios from "axios";
import DisplayData from "../DisplayData";

jest.mock("axios");
const FAKE_HITS = [
    { objectID: 1, url: "pippoUrl", title: "pippo" },
    { objectID: 2, url: "plutoUrl", title: "pluto" },
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

    it("should show new entries when query is set", async () => {
        const el = document.createElement("div");
        document.body.appendChild(el);
        axios.get.mockResolvedValue({ data: { hits: FAKE_HITS } });
        await act(async () => {
            ReactDOM.render(<DisplayData query='pippo' />, el);
        });
        const liCounts = el.querySelectorAll("li");
        expect(liCounts.length).toBe(2);
    });
});
