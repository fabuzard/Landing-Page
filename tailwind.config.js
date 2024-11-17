module.exports = {
  content: ['./*.html'], // Adjust this path if needed
  theme: {
    extend: {
      colors:{
        'grey-background':'#2B2B2B',
      },
      fontFamily:{
        logo: ['Poppins', 'sans-serif'],

      }
    },
    fontSize: {
      'logo-size': '24px', // Example custom size
      'auth-size': '18px'
    },
  },
  plugins: [],
}
