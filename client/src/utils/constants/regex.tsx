const REGEX = {
  VALIDATE_NAME: /^(?!\s*$)[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯàáâãèéêìíòóôõùúăđĩũơưĂÂÊÔƠĐđ\s]+$/,
  VALIDATE_PHONE: /^0\d{9,10}$/,
  VALIDATE_MESSAGE: /^(?!\s*$).+/,
};

export { REGEX };
