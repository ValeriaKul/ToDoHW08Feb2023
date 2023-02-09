import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDoOneDay = ({ toDoNew, markDone, setUpdateData, deleteTask }) => {
  return (
    <>
      <div className="dayName">
        {toDoNew && toDoNew.length ? (
          <p>
            {(toDoNew[0].valueDate === ""
              ? "No date"
              : toDoNew[0].valueDate
            ).toUpperCase()}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="taskCont">
        {toDoNew
          .sort((a, b) => (a.value < b.value ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className=" taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span
                      className={
                        task.value === "important"
                          ? "taskNumber import"
                          : "taskNumber curr"
                      }
                    >
                      {index + 1}
                    </span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <div className="icons_block">
                      <span
                        title="Completed/Not Completed"
                        onClick={(e) => markDone(task.id)}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      {task.status ? null : (
                        <span
                          title="Edit"
                          onClick={() =>
                            setUpdateData({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            })
                          }
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}
                      <span title="Delete" onClick={() => deleteTask(task.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
};

export default ToDoOneDay;
