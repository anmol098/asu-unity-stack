/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css } from "emotion";
import Tokens from "../../theme";
import { H4, Icon } from "@asu-design-system/components-library";

const PanelInput = ({ children, icon, ...props }) => {
  const fieldIcon = icon ? <Icon type={icon} /> : "";

  return (
    <div
      class={css`
        border-bottom: 1px solid #d0d0d0;
      `}
    >
      <H4
        class={css`
          display: flex;
          flex-direction: row;

          > div {
            padding-left: 2rem;
          }
        `}
      >
        {fieldIcon}
        {children}
      </H4>
    </div>
  );
};

const Input = ({ label, name, type, children, ...props }) => {
  const check = type == "checkbox";

  return (
    <span
      class={css`
        display: flex;
        flex-direction: row;
        padding-left: 2rem;
        input,
        button,
        select,
        optgroup,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }

        input {
          margin-left: 2rem;
        }

        input:checked + .switch {
          background: ${Tokens.ColorBaseGold};
        }

        .switch {
          cursor: pointer;
          text-indent: -9999px;
          width: 46px;
          height: 25px;
          display: block;
          border-radius: 21px;
          position: relative;
          background: ${Tokens.ColorBaseGray4};
          font-weight: bold;
          font-size: 0.85em;
        }

        input:checked + .switch:after {
          left: calc(100% - 3px);
          transform: translateX(-100%);
        }

        .switch:after {
          content: "";
          position: absolute;
          top: 2px;
          left: 3px;
          width: 21px;
          height: 21px;
          background: #fff;
          border-radius: 21px;
          transition: 0.3s;
        }

        input[type="checkbox"] {
          height: 0;
          width: 0;
          visibility: hidden;
        }
      `}
    >
      {check && label}
      {children}
      <label htmlFor={name} class={check ? "switch" : ""} />
    </span>
  );
};

export { PanelInput, Input };
