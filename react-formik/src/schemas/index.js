import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email('Geçerli bir email adresi giriniz.')
        .required('Bu alan boş geçilemez'),
    age: yup
        .number()
        .positive('Negatif bir sayı girilemez')
        .integer('Lütfen yaşınızı tam sayı olarak giriniz')
        .required('Bu alan boş geçilemez'),
    password: yup
        .string()
        .min(8, 'Minimum 8 karakterli bir şifre oluşturun')
        .matches(passwordRules, {
            message: 'Lütfen en az 1 büyük harf 1 küçük harf ve bir sayı giriniz'
        })
        .required('Bu alan boş geçilemez'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Şifreler eşleşmiyor')
        .required('Bu alan boş geçilemez')
})

export const advancedSchema = yup.object().shape({
    username: yup
        .string()
        .min(5,'Kullanıcı adı minimum 5 karakter uzunluğunda olmalıdır')
        .required('Bu alan boş geçilemez'),
    university: yup
    .string()
    .oneOf(['bogazici','beykent','odtü','itü','bilkent'],'Lütfen seçeneklerden birini seçiniz')
    .required('Bu alan boş geçilemez'),
    isAccepted: yup
        .boolean()
        .oneOf([true],'Kullanım koşullarını kabul ediniz')
})