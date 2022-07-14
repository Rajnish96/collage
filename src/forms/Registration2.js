import React from 'react'

export default function Registration2(props) {
  return (<>
  <div className="container-fluid">
    <div className="row justify-content-evenly">
        <div className="col-6 card p-3 mt-5 ">
            <form onSubmit={props.Submit} >
                <div>
                    <label htmlFor='schoolNmae'>School Name : </label>
                    <input type="text" required name='schoolName' autoComplete='off' className="form-control" placeholder="Enter your School name" />
                </div>
                <div>
                    <label htmlFor='subject'>Subject : </label><br/>
                    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btncheck1"><b>1.</b>CP</label>{" "}

                        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btncheck2"><b>2.</b>IP</label>{" "}

                        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btncheck3"><b>3.</b>Other</label>{" "}
                    </div>

                </div>
                
                     
                
                <br/>
                <div>
                    <button type='submit' className='btn btn-primary'>Save</button>
                </div>
            </form>
            <center>
                <span >1</span>{" "}
                <span className='badge rounded-pill text-bg-warning bg-success'>2</span>{" "}
                <span >3</span>
            </center>
        </div>
    </div>
  </div>
  
  </>
  )
}
