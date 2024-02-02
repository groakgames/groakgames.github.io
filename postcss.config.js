import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'
import postcssAutoprefixer from 'autoprefixer'

const config = {
	plugins: [
		postcssImport,
		postcssNesting,
		postcssAutoprefixer
	]
}

export default config;