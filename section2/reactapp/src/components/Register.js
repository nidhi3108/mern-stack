import React from 'react';
import {Formik} from 'formik';
import swal from 'sweetalert2';

const Register = () => {
//asynchronus fn=return promise
    const userSubmit = async (formdata) => {
        console.log(formdata);
       const response = await fetch('http://localhost:4000/user/add',{
        method:'POST',
        body:JSON.stringify(formdata),
        headers:{
            'Content-Type':'application/json'
        }
      })
      if(response.status===200){
        console.log('user data added!');
        swal.fire({
            icon:'success',
            title:'Well done',
            text: 'Registered Successfully'
        })

      }
      console.log('request sent');
    }

    

    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center">Register Here</h3>
                    <Formik
                        initialValues={{username: '', email: '', password: '', age: 0}}
                        onSubmit={userSubmit}
                    >
                        {({values, handleSubmit, handleChange}) => (
                            <form onSubmit={handleSubmit}>
                            <label className='mt-5'>Username</label>
                            <input className='form-control' id="username" onChange={handleChange} value={values.username} />

                            <label className='mt-3'>Email</label>
                            <input className='form-control' id="email" onChange={handleChange} value={values.email} />

                            <label className='mt-3'>Password</label>
                            <input className='form-control' id="password" onChange={handleChange} value={values.password} />

                            <label className='mt-3'>Age</label>
                            <input className='form-control' id="age" onChange={handleChange} value={values.age} />

                            <button type="submit" className='btn btn-primary mt-5'>Submit</button>

                        </form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    )

}

export default Register