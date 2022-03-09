import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  fireEvent,
  // getRoles,
  render,
  screen,
  cleanup,
  prettyDOM,
} from "@testing-library/react";

//import { prettyDOM } from "@testing-library/react";
import Togglable from "./Togglable";
import i18n from "../i18n";
//import PropTypes from "prop-types";
////import test from "ava";
////@jest-environment jsdom

describe("<Toggable />", () => {
  const buttonLabel = "show";
  let view;

  beforeEach(() => {
    //Habría que buscar la forma buena de hacer este render.
    // eslint-disable-next-line testing-library/no-render-in-setup
    view = render(
      <Togglable buttonLabel={buttonLabel}>
        <div>testDivContent</div>
      </Togglable>
    );
    // const view = render(....)
    // // eslint-disable-next-line testing-library/no-debugging-utils
    // view.debug();
  }); // Default on import: runs it after each test.

  afterEach(() => {
    cleanup();
  }); // Default on import: runs it after each test.

  test("render its children", () => {
    screen.getByText("testDivContent");
  });

  //Para comprobar que existe un estilo
  //********************************************************************** */
  test("render its children but they are not visible", () => {
    const el = screen.getByText("testDivContent");
    // eslint-disable-next-line testing-library/no-node-access
    expect(el.parentNode).toHaveStyle("display: none");
    //expect(el.parentNode).not.toHaveStyle("display: none");
  });
  //********************************************************************** */

  //comprueba que el estilo ha cambiado al pulsar un boton. Se podría juntar con la anterior prueba
  //********************************************************************** */
  test("After clicking its children must be show", () => {
    const button = screen.getByText(buttonLabel);
    fireEvent.click(button);
    const el = screen.getByText("testDivContent");
    // eslint-disable-next-line testing-library/no-node-access
    expect(el.parentNode).not.toHaveStyle("display: none");
  });
  //********************************************************************** */

  test("toggle content can be closed", () => {
    // // eslint-disable-next-line testing-library/no-debugging-utils
    // view.debug();

    const button = screen.getByText(buttonLabel);
    fireEvent.click(button);
    const el = screen.getByText("testDivContent");
    // eslint-disable-next-line testing-library/no-node-access
    expect(el.parentNode).not.toHaveStyle("display: none");

    // // eslint-disable-next-line testing-library/no-debugging-utils
    // view.debug();

    //button: nth-child(2)
    const cancelButton = screen.getByText(i18n.TOGGABLE.CANCEL_BUTTON);
    fireEvent.click(cancelButton);

    // eslint-disable-next-line testing-library/no-node-access
    expect(el.parentNode).toHaveStyle("display: none");

    // // eslint-disable-next-line testing-library/no-debugging-utils
    // view.debug();
  });
});

//npm run test
//npm test -- --coverage
//"coverage": "react-scripts test --env=jsdom --watchAll=false --coverage"
//"test": "react-scripts test && ava",
