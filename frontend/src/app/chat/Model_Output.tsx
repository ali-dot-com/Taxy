export default function Model_Output(model_output: any, user_input: any) {
  return (
    <div className="row">
      <div className="col-lg-12">{user_input}</div>
      <div className="col-lg-12" style={{ border: "1px solid red" }}>
        <div className="">{model_output}</div>
        <div>
          <i className="pi pi-copy" style={{ color: "slateblue" }}></i>
        </div>
      </div>
    </div>
  );
}
