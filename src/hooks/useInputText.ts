export const useInputText = (value: string, type: string) => {
  switch (type) {
    case 'email':
      const checkPattern = /\S+@\S+\.\S+/
      return !checkPattern.test(value)
    default:
      return false
  }
}