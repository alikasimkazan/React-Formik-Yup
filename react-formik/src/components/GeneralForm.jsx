import React from 'react'
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { Link } from 'react-router-dom';

function GeneralForm() {

    const onSubmit = async (values, actions) => {


        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        });
        actions.resetForm();
    }


    const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit
    });


    return (
        <>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <div className='inputDiv'>
                        <label>Email</label>
                        <input
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                            id='email'
                            placeholder='Mail Adresinizi Giriniz'
                            className={errors.email ? 'input-error' : ''}
                        />
                    </div>
                    {errors.email && <p className='error'>{errors.email}</p>}
                    <div className='inputDiv'>
                        <label>Yaş</label>
                        <input
                            type="number"
                            onChange={handleChange}
                            value={values.age}
                            id='age'
                            placeholder='Yaşınızı Giriniz'
                            className={errors.age ? 'input-error' : ''}
                        />
                    </div>
                    {errors.age && <p className='error'>{errors.age}</p>}
                    <div className='inputDiv'>
                        <label>Şifre</label>
                        <input
                            type="password"
                            onChange={handleChange}
                            value={values.password}
                            id='password'
                            placeholder='Şifreinizi Giriniz'
                            className={errors.password ? 'input-error' : ''}
                        />
                    </div>
                    {errors.password && <p className='error'>{errors.password}</p>}
                    <div className='inputDiv'>
                        <label>Şifre Tekrarı</label>
                        <input
                            type="password"
                            onChange={handleChange}
                            value={values.confirmPassword}
                            id='confirmPassword'
                            placeholder='Şifreinizi Tekrar Giriniz'
                            className={errors.confirmPassword ? 'input-error' : ''}
                        />
                    </div>
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                    <button disabled={isSubmitting} type='submit'>Kaydet</button>
                    <Link className='formLink' to='/portal'>
                    Portala Git
                    </Link>
                </form>
            </div>
        </>
    )
}

export default GeneralForm