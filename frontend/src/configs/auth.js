export default {
  meEndpoint: '/auth/me',
  // loginEndpoint: '/jwt/login',
  loginEndpoint: 'http://localhost:8000/api/token/',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
