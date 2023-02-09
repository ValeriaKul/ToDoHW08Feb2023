import React from "react";
import ToDoOneDay from "./toDoOneDay";

const Tuesday = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  const toDoNew = toDo.filter((el) => el.valueDate === "tuesday");

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
export default Tuesday;
