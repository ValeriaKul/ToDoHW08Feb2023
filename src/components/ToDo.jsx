import React from "react";
import ToDoOneDay from "./toDoOneDay";

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  const toDoNew = toDo.filter((el) => el.valueDate === "");

  return (
    <>
      <ToDoOneDay
        toDoNew={toDoNew}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default ToDo;
