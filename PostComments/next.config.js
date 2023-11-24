const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    output: 'export',
    basePath: (isDev ? '/' : `/house-test-task/PostComments`),
    distDir: '../dist/PostComments',
};
