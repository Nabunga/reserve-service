export const loginMetaData = {
  email: {
    validator: {checkEmail:(value: string) => /\S+@\S+\.\S+/.test(value) || 'Неверный формат емейла'}
  },
  password: {
    validator: {value: 8, message: 'Пароль должен быть не менее 8 символов'}
  }
}