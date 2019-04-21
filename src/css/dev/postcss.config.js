class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ["src/css"],
    }), 
    require('tailwindcss')('./src/css/tailwind.js'),    
    require('autoprefixer')({      
      browsers: ['>1%']
    }),    
  ]
}