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
    require('cssnano') ({
      preset: 'default',
    }),
    require('@fullhuman/postcss-purgecss')({
      content: ['./layouts/**/*.html'],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['css','html']
      }], 
      fontFace: true,
      whitelist: ['class1', 'class2']
    }),    
    require('postcss-cssnext')({ browsers: ['last 2 versions'] }),    
  ]
}