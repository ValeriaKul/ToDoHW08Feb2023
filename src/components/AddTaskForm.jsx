const AddTaskForm = ({
  newTask,
  setNewTask,
  addTask,
  value,
  chengeSelect,
  valueDate,
  chengeDate,
}) => {
  return (
    <>
      <div className="row formTable">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
          <div className="row">
            <div className="row ch_importance">
              <select
                name="import"
                value={value}
                onChange={(e) => chengeSelect(e)}
              >
                <option value="">Importance:</option>
                <option value="important">important</option>
                <option value="current">current</option>
              </select>
            </div>
            <div className="row ch_calendar">
              <select value={valueDate} onChange={(e) => chengeDate(e)}>
                <option value="">Day of the Week:</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
