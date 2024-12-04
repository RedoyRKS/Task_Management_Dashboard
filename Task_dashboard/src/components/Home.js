import React from "react";

function Home() {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper kanban">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <h1>Task Management Dashboard</h1>
              </div>
              <div className="col-sm-6 d-none d-sm-block">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Task Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content pb-3">
          <div className="container-fluid h-100">
            <div className="card card-row card-secondary">
              <div className="card-header">
                <h3 className="card-title">Add Task</h3>
              </div>
              <div className="card-body">
                <div className="card card-info card-outline">
                  <div className="card-header">
                    <h5 className="card-title">Create Task</h5>
                    <div className="card-tools">
                      <a href="#" className="btn btn-tool">
                        <i className="fas fa-pen" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* text input */}
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ..."
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Enter ..."
                        defaultValue={""}
                      />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="far fa-calendar-alt" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        data-inputmask-alias="datetime"
                        data-inputmask-inputformat="dd/mm/yyyy"
                        data-mask
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-row card-primary">
              <div className="card-header">
                <h3 className="card-title">All Task</h3>
              </div>
              <div className="card-body">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="card-title">Create first milestone</h5>
                    <div className="card-tools">
                      <a href="#" className="btn btn-tool btn-link">
                        #1
                      </a>
                      <a href="#" className="btn btn-tool">
                        <i className="fas fa-pen" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="card-title">Create SignUp Page</h5>
                    <div className="card-tools">
                      <a href="#" className="btn btn-tool btn-link">
                        #2
                      </a>
                      <a href="#" className="btn btn-tool">
                        <i className="fas fa-pen" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="card-title">Create Task Managment Dashboard</h5>
                    <div className="card-tools">
                      <a href="#" className="btn btn-tool btn-link">
                        #3
                      </a>
                      <a href="#" className="btn btn-tool">
                        <i className="fas fa-pen" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
            <div className="card card-row card-default">
              <div className="card-header bg-info">
                <h3 className="card-title">Pending Tasks</h3>
              </div>
              <div className="card-body">
                <div className="card card-light card-outline">
                  <div className="card-header">
                    <h5 className="card-title">Create Task Managment Dashboard</h5>
                    <div className="card-tools">
                      <a href="#" className="btn btn-tool btn-link">
                        #3
                      </a>
                      <a href="#" className="btn btn-tool">
                        <i className="fas fa-pen" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-row card-success">
              <div className="card-header">
                <h3 className="card-title">Completed Tasks</h3>
              </div>
              <div className="card-body">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="card-title">Create SignUp Page</h5>
                    <div className="card-tools">
                      <a href="#" className="btn btn-tool btn-link">
                        #2
                      </a>
                      <a href="#" className="btn btn-tool">
                        <i className="fas fa-pen" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
