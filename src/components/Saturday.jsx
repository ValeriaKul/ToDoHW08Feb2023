import React from "react";
import ToDoOneDay from "./toDoOneDay";

const Saturday = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  const toDoNew = toDo.filter((el) => el.valueDate === "saturday");

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

export default Saturday;
