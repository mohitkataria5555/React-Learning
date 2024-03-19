function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
