import React from 'react'

const Edit = () => {
    return (
        <div>
            <center>
            <h2 style={{"textAlign":"center"}}>Edit Form</h2>
        <form className='from-horizontal' autoComplete='off'>
            <div className='form-group'>
                <label className='control-label col-sm-2'>First Name</label>
                <div className='col-sm-4'>
                    <input type='text' className='form-control' placeholder='First Name' />
                </div>
            </div>

            <div className='form-group'>
                <label className='control-label col-sm-2'>Last Name</label>
                <div className='col-sm-4'>
                    <input type='text' className='form-control' placeholder='Last Name' />
                </div>

                <div className='from-group'>
                    <label className='control-label col-sm-2'> Email:</label>
                    <div className='col-sm-4'>
                        <input type='email' className='form-control' placeholder='Enter Email' />
                    </div>

                    <div className='form-group'>
                        <div className='col-sm-offset-2 col-sm-10'>
                            <input type='submit' className='btn btn-success' value='save' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </center>
        </div>
    )
}

export default Edit;