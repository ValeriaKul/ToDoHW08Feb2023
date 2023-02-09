import React from "react";
import ToDoOneDay from "./toDoOneDay";

const Sunday = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  const toDoNew = toDo.filter((el) => el.valueDate === "sunday");

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
export default Sunday;
