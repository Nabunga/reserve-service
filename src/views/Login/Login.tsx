import Image from 'next/image';
import restaurantPic from '../../../public/images/restaurant.jpg';
import css from './Login.module.scss';
import Button from '@/components/Button/Button';
import InputText from '@/components/InputText/InputText';
import { useForm, FormProvider } from 'react-hook-form';
import { loginMetaData } from './formData';
import Link from 'next/link';

const Login = () => {

  const methods = useForm({
    mode: 'onBlur', defaultValues: {
      email: '',
      password: '',
      phone: ''
    }
  });

  const isFormValid = Object.keys(methods.formState.errors).length === 0;

  return (
    <main className={css.container}>

      <div className={css.formContainer}>
        <div className={css.form}>
          <header className={css.header}>
            <h1 className='font_h1'>Авторизация</h1>
          </header>
          <FormProvider {...methods}>
            <form className={css.inputsGroup}>
              <InputText
                name='email'
                type='email'
                label='Почта'
                validateRules={loginMetaData.email.validator}

              />
              <InputText
                name='password'
                type='password'
                label='Пароль'
                minLength={loginMetaData.password.validator}
                className={css.input}
              />
              <InputText
                name='tel'
                type='tel'
                label='Номер телефона'
                className={css.input}
              />
              <div className={css.buttonGroup}>
                <Link href='/registration'
                className={css.regLink}
                >
                  Зарегистрироваться
                </Link>
                <Button
                  variant='submit'
                  type='submit'
                  className={css.submitButton}
                  disabled={!isFormValid}
                >
                  Войти
                </Button>
              </div>
              
            </form>
          </FormProvider>

        </div>
      </div>

      <div className={css.imageBlock}>
        <Image
          alt='restaurant picture'
          src={restaurantPic}
          className={css.img}
        />
      </div>

    </main>
  )
}

export default Login;