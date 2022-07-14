import React from 'react'

export default function Registration(props) {
  return (<>
        <div className='container-fluid '>
            <div className='row justify-content-evenly '>
                <div className='col-6 card mt-5 p-3'>
            <form onSubmit={props.submit}>
                <div>
                    <label htmlFor='name'>Name : </label><br/>
                    <input type="text" name='name' required autoComplete='off' className="form-control" placeholder="Please enter your Name" /> 
                </div>
                <div>
                    <label htmlFor='email'>Email : </label><br/>
                    <input type="email" name='email' autoComplete='off' required className="form-control" placeholder="Please enter your Email" /> 
                </div><br/>
                <div>
                <button type="submit" className='btn btn-primary'>Save</button>
                </div>
                
            </form>
            <center>
                <span className='badge rounded-pill text-bg-warning bg-success'>1</span>{" "}
                <span >2</span>{" "}
                <span >3</span>
            </center>
            </div>
         </div>
        </div>
  </>  
  )
}
