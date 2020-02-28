const env = process.env.NODE_ENV || 'dev';

const config = () => {
  switch (env) {
    case 'dev':
      return {
        db_string: '',
        secret_password: '',
        token_expire: ''
    }
    case 'hml':
      return {
        db_string: '',
        secret_password: '',
        token_expire: ''
      }
    case 'prod':
      return {
        db_string: '',
        secret_password: '',
        token_expire: ''
      }
  }
}
module.exports = config();