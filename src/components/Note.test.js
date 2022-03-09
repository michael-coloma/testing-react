import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, emmitted } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import Note from "./Note";

//Formas de comprobar que un componente o parte de un componente es renderizado
test("renders content", () => {
  const note = {
    content: "this is a test",
    important: true,
  };

  const view = render(<Note note={note} />);
  expect(view.container).toHaveTextContent(note.content);

  //  const view = render(<Note note={note} />);
  //Dos formas para buscar textos:
  //*****************************************************
  //1)
  //   screen.getByText("this is a test");
  //   screen.getByText("make not important");
  //2)
  //expect(view.container).toHaveTextContent(note.content);
  //expect(view.container).toHaveTextContent("camiones");
  //*****************************************************

  //Comrpueba que el elemento esta definido
  //*****************************************************
  //Esto parece que da siempre true, así que igual no es muy útil
  //   const el = screen.getByText("this is a test");
  //   expect(el).toBeDefined();
  //*****************************************************

  //Comprueba que un boton este deshabilitado
  //*****************************************************
  //   const button = screen.getByRole('button', {name: /disabled button/i})
  // expect(button).toBeDisabled()
  //*****************************************************

  //Para ver lo que renderiza un componente en html
  //*****************************************************
  //   const view = render(<Note note={note} />);
  //   // eslint-disable-next-line testing-library/no-debugging-utils
  //   view.debug();
  //   //or
  //   const { debug } = render(<Note note={note} />);
  //   // eslint-disable-next-line testing-library/no-debugging-utils
  //   debug();
  //*****************************************************

  //El querSelector no hay que usar, hay que uar el getByRole (si es un elemento valido como button) para ver el html deseado por algun elemento
  //*********************************************************************************************************** */
  // render(<Note note={note} />);
  // const li = screen.getByRole("listitem");
  // console.log(prettyDOM(li));
  // console.log(li);
  //*********************************************************************************************************** */
});

//Forma de comprobar que se hace un click
test("Clicking the button call event handler once", () => {
  const note = {
    content: "this is a test",
    important: true,
  };

  const mockHandler = jest.fn();

  render(<Note note={note} toggleImportance={mockHandler} />);
  const button = screen.getByText("make not important");

  fireEvent.click(button); //si se pone otro click fallaria porque comprobamos que sea uno

  // 1º forma:
  //   const element = mockHandler.mock.calls;
  //   expect(element).toHaveLength(1);

  // 2º forma:
  expect(mockHandler).toHaveBeenCalledTimes(1);
});

// //Forma de comprobar que se hace un click
// test("Clicking the button call event handler once otherway", () => {
//   const note = {
//     content: "this is a test",
//     important: true,
//   };

//   render(<Note note={note} />);
//   const button = screen.getByText("make not important");

//   fireEvent.click(button); //si se pone otro click fallaria porque comprobamos que sea uno

//   // 1º forma:
//   //   const element = mockHandler.mock.calls;
//   //   expect(element).toHaveLength(1);

//   // 2º forma:
//   expect(emmitted("make not important")).toHaveBeenCalledTimes(1);
// });
