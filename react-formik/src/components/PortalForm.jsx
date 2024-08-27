import React from 'react'
import { Form, Formik } from 'formik';
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import '../App.css'
import CustomSelect from './CustomSelecet';
import CustomCheckbox from './CustomCheckbox';
import { Link } from 'react-router-dom';

function PortalForm() {

    const onSubmit = async (values, actions) => {


        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        });
        actions.resetForm();
    }


    return (
        <div className='App'>
            <Formik
                initialValues={{ username: '', university: ' ', isAccepted: false }}
                onSubmit={onSubmit}
                validationSchema={advancedSchema}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <CustomInput
                            label='Kullanıcı Adı'
                            name='username'
                            type='text'
                            placeholder='Kullanıcı adını giriniz'
                        />
                        <CustomSelect
                            label='Okulunuz'
                            name='university'
                            placeholder='Lütfen Üniversitenizi Seçiniz'
                        >
                            <option value='' >Lütfen Üniversitenizi Seçiniz</option>
                            <option value='bogazici' >Boğaziçi Üniversitesi</option>
                            <option value='beykent' >Beykent Üniversitesi</option>
                            <option value='odtü' >ODTÜ</option>
                            <option value='itü' >İTÜ</option>
                            <option value='bilkent' >Bilkent Üniversitesi</option>
                        </CustomSelect>
                        <CustomCheckbox type='checkbox' name='isAccepted' />
                        <button disabled={isSubmitting} type='submit' >Kaydet</button>
                        <Link className='formLink' to='/'>Ana Forma Git</Link>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default PortalForm