import React, { useReducer, useCallback, useMemo, useState } from "react";

// ---------------- Reducer function ----------------
const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return [...state, action.Text];
    }

    case "del": {
      const remove = [...state];
      remove.splice(action.index, 1);
      return remove;
    }

    case "edi": {
      const dis = [...state];
      dis[action.index] = action.Text; // update text at index
      return dis;
    }

    default:
      return state;
  }
};

// ---------------- Component ----------------
function Todos() {
  const [value, setValue] = useState(""); // input box value
  const [editIndex, setEditIndex] = useState(null); // store index being edited
  const [state, dispatch] = useReducer(reducer, []); // todos

  // ------------- Add / Edit ----------------
  const sub = useCallback(
    (event) => {
      event.preventDefault();

      if (editIndex !== null) {
        // If editing → update todo
        dispatch({ type: "edi", Text: value, index: editIndex });
        setEditIndex(null); // reset edit mode
      } else {
        // If not editing → add new todo
        dispatch({ type: "add", Text: value });
      }

      setValue(""); // clear input
    },
    [value, editIndex]
  );

  // ------------- Delete ----------------
  const del = useCallback((index) => {
    dispatch({ type: "del", index });
    if (editIndex === index) {
      // if deleting the item being edited → reset
      setEditIndex(null);
      setValue("");
    }
  }, [editIndex]);

  // ------------- Start Editing ----------------
  const startEdit = useCallback((val, index) => {
    setValue(val);       // put text in main input box
    setEditIndex(index); // remember which todo is being edited
  }, []);

  // ------------- Render list ----------------
  const content = useMemo(() => {
    return state.map((val, index) => (
      <div key={index}>
        <li>{val}</li>

        <input
          type="button"
          value="delete"
          onClick={() => del(index)}
        />

        <input
          type="button"
          value="edit"
          onClick={() => startEdit(val, index)}
        />
      </div>
    ));
  }, [state, del, startEdit]);

  // ------------- Final UI ----------------
  return (
    <>
      <form onSubmit={sub}>
        <input
          type="text"
          value={value}
          placeholder="Add or Edit todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <ul>{content}</ul>
    </>
  );
}

export default Todos;
