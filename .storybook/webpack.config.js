const genDefaultConfig = require("@storybook/react/dist/server/config/webpack.config.js");

const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = (baseConfig, env, defaultConfig) => {
    const config = baseConfig;

    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules[0].test = /\.(ts|tsx)$/;
    //   config.module.rules[0].query.presets = ["@babel/preset-env"];
    // config.module.rules.unshift({
    //     test:/\.(js|jsx)$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/,
    //     include:  [path.resolve(__dirname, "../src")],
    //     query: {
    //         presets: ['react', 'es2015', "stage-0"]
    //     }
    //   });  
    config.module.rules.push({
        test: /\.less$/,
        use: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                },
            },
            require.resolve('less-loader'),
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebookincubator/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        autoprefixer({
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR',
                                'not ie < 9', // React doesn't support IE8 anyway
                            ],
                            flexbox: 'no-2009',
                        }),
                    ],
                },
            },
        ]


    });

    config.module.rules.push({
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192',
        exclude: /.svg$/
    });
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        include: [path.resolve(__dirname, "../src")],
        options: {
            transpileOnly: true
        }
    });
    // [ts-loader, babel-loader, ...]
    //   /console.log(JSON.stringify(config))
    return config;
};