module.exports = {
  content: ['./*.html'], // Adjust this path if needed
  theme: {
    extend: {
      colors:{
        'grey-background':'#2B2B2B',
        'image-background':"#333333"
      },
      fontFamily:{
        logo: ['Poppins', 'sans-serif'],

      }
    },
    fontSize: {
      'logo-size': '24px', // Example custom size
      'auth-size': '18px',
      'Headline': '60px',

    },
  },
  plugins: [],
}
