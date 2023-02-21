

function Remote() {

  return (
    <main>
        <div id="content" style={{ padding:"10px;"}} className="table-responsive">
            <h1>IR Console</h1>
            <h3>Send</h3>
            <div className="row">
                <div className="col-sm-4">
                    <div className="">
                        <label className="control-label col-xs-2"><b>IR FileName:</b></label>
                        <div className="col-xs-5">
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="">
                        <label className="control-label col-xs-2"><b>IR Command:</b></label>
                        <div className="col-xs-5">
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="">
                        <label className="control-label col-xs-2"><b>Control:</b></label>
                        <div className="col-xs-5">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3>Log</h3>
        <table className="table table-striped table-sm table-hover table-responsive table-bordered" id='logtable'>
            <thead className="thead-light table-hover">
                <tr>
                    <th align="left"><b>Date</b></th>
                    <th align="left"><b>FileName</b></th>
                    <th align="left"><b>Command</b></th>
                    <th align="left"><b>Result</b></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </main>
)
}

export default Remote;
