import React from "react";
import ToDoOneDay from "./toDoOneDay";

const Friday = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  const toDoNew = toDo.filter((el) => el.valueDate === "friday");

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

export default Friday;
