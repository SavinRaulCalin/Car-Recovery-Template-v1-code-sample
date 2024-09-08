import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "../Card";
import { Demo } from "@/svg";
import { Tbase, Tvariant } from "@/types/client";

type Tprops = Pick<Tbase, "svg" | "title" | "elClass"> & Tvariant;

const props: Pick<Tprops, "svg" | "title" | "elClass"> = { svg: <Demo />, title: { text: "title", variant: "h2" }, elClass: "elClass" };
const textProps: Tprops = { ...props, paragraph: "paragraph" };
const telProps: Tprops = { ...props, href: "tel:+44 744544789", value: "(44) 744 544 789" };
const emailProps: Tprops = { ...props, href: "mailto:test@test.com", value: "test@test.com" };
const linkProps: Tprops = { ...props, href: "https://www.link.com", value: "@link", attr: { rel: "noreferrer", target: "_blank" } };

describe("path: components/common/card/social - Card", () => {
  describe("snapshot", () => {
    it("is a match", () => {
      const { asFragment } = render(<Card {...textProps} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("props", () => {
    it("have the correct image", () => {
      render(<Card {...textProps} />);

      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("have the correct title", () => {
      render(<Card {...textProps} />);

      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("title");
      expect(screen.getByText("title")).toBeInTheDocument();
    });

    it("have the correct style", () => {
      render(<Card {...textProps} />);

      expect(screen.getByRole("listitem")).toHaveClass("elClass");
    });

    describe("Card is of type text", () => {
      it("have the correct text", () => {
        render(<Card {...textProps} />);

        expect(screen.getByTestId("paragraph")).toHaveTextContent("paragraph");
        expect(screen.getByText("paragraph")).toBeInTheDocument();
      });
    });

    describe("Card is of type `tel`", () => {
      it("have the correct text", () => {
        render(<Card {...telProps} />);

        expect(screen.getByTestId("anchor")).toHaveAttribute("href", "tel:+44 744544789");
        expect(screen.getByTestId("anchor")).toHaveTextContent("(44) 744 544 789");
        expect(screen.getByText("(44) 744 544 789")).toBeInTheDocument();
      });
    });

    describe("Card is of type `email`", () => {
      it("have the correct text", () => {
        render(<Card {...emailProps} />);

        expect(screen.getByTestId("anchor")).toHaveAttribute("href", "mailto:test@test.com");
        expect(screen.getByTestId("anchor")).toHaveTextContent("test@test.com");
        expect(screen.getByText("test@test.com")).toBeInTheDocument();
      });
    });

    describe("Card is of type `link`", () => {
      it("have the correct text", () => {
        render(<Card {...linkProps} />);

        expect(screen.getByTestId("anchor")).toHaveAttribute("href", "https://www.link.com");
        expect(screen.getByTestId("anchor")).toHaveTextContent("@link");
        expect(screen.getByText("@link")).toBeInTheDocument();
      });
    });
  });
});
