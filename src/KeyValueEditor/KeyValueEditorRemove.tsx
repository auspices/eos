import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Clickable } from "../Clickable";

export const KeyValueEditorRemove = styled(Clickable).attrs({
  px: 6,
  fontSize: 4
})`
  &:focus {
    outline: 0;

    &::before,
    &::after {
      background-color: ${themeGet("colors.primary")};
    }
  }

  &::before,
  &::after {
    content: "";
    display: block;
    width: 33.33%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${themeGet("colors.tertiary")};
    transition: background-color 250ms;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      background-color: ${themeGet("colors.primary")};
    }
  }
`;

KeyValueEditorRemove.defaultProps = {
  position: "relative"
};
