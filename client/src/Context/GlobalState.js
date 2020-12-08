import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";
import { baseUrl } from "../utils";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Initial State
const initialState = {
  todos: [],
  notes: [],
  user: [],
};

// Create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const history = useHistory();

  const [authenticated, setAuthenticated] = useState();

  function userCheck() {
    const user = localStorage.getItem("user");
    if (!user) {
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
    }
  }

  useEffect(() => {
    userCheck();
    localStorage.setItem("authenticated", authenticated);
  }, [authenticated]);

  const defaultContext = {
    authenticated,
    setAuthenticated,
  };

  // action
  async function getTodos() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        ContentType: "application/json",
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(`${baseUrl}/api/v1/todo/getTodo`, config);
      // console.log(res.data.todo)
      dispatch({
        type: "GET_TODOS",
        payload: res.data.todo,
      });
    } catch (error) {}
  }

  async function addTodo(todo) {
    try {
      const res = await fetch(`${baseUrl}/api/v1/todo/createTodo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          todo,
        }),
      }).then((res) => res.json());

      dispatch({
        type: "ADD_TODO",
        payload: res.todo,
      });
    } catch (error) {}
  }

  async function deleteTodo(id) {
    try {
      await fetch(`${baseUrl}/api/v1/todo/deleteTodo/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => response.json());
      dispatch({ type: "DELETE_TODO", payload: id });
    } catch (error) {}
  }

  async function allDone() {
    try {
      const res = await fetch(`${baseUrl}/api/v1/todo/markAllAsDone`, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          ContentType: "application/json",
          Accept: "application/json",
        },
      }).then((res) => res.json());

      dispatch({ type: "ALLDONE_TODO", payload: res.todo });
      console.log(res);
    } catch (error) {}
  }

  async function markDone(id) {
    try {
      const res = await fetch(`${baseUrl}/api/v1/todo/markOneAsDone/${id}`, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          ContentType: "application/json",
          Accept: "application/json",
        },
      }).then((response) => response.json());

      dispatch({ type: "MARK_TODO", payload: res.todo });
    } catch (error) {}
  }

  async function getNotes() {
    try {
      const res = await fetch(`${baseUrl}/api/v1/note/getNotes`, {
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          ContentType: "application/json",
        },
      }).then((res) => res.json());
      dispatch({ type: "GET_NOTES", payload: res.note });
      // console.log(res.note);
    } catch (error) {}
  }

  async function saveNote(text, title) {
    try {
      const res = await await fetch(`${baseUrl}/api/v1/note/saveNote`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          text,
          title,
        }),
      }).then((res) => res.json());
      console.log(res.note);
      dispatch({ type: "ADD_NOTE", payload: res.note });
    } catch (error) {}
  }

  async function deleteNote(id) {
    try {
      console.log(id);
      await fetch(`${baseUrl}/api/v1/note/deleteNote/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => res.json());
      dispatch({ type: "DELETE_NOTE", payload: id });
    } catch (error) {}
  }

  async function signin(email, password) {
    try {
      const res = await fetch(`${baseUrl}/api/v1/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            console.log(data);
          } else {
            console.log(data.error);
          }
        });
      dispatch({ type: "USER", payload: res.user });
    } catch (error) {}
  }

  return (
    // This allows us to use in any component by use usecontext
    // Which is the react hook
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        notes: state.notes,
        user: state.user,
        getTodos,
        addTodo,
        deleteTodo,
        allDone,
        markDone,
        getNotes,
        saveNote,
        deleteNote,
        signin,
        defaultContext,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
