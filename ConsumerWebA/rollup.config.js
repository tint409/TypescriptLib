import del from 'rollup-plugin-delete'

export default {
    input: 'dist/js/Index.js',
    output: [
        {
            name: 'Aspen',
            file: 'dist/aspen.es5.js',
            format: 'iife'
        },
        {
            file: 'dist/aspen.js',
            format: 'es'
        }
    ],
    plugins: [
        del({
            targets: [
                'dist/Modules/Helpers/*.d.ts'
            ]
        })
    ]
};

//import typescript from 'rollup-plugin-typescript2'
//import pkg from './package.json'

//export default {
//    input: 'src/Index.ts',
//    output: [
//        {
//            file: pkg.module,
//            format: 'es',
//        },
//    ],
//    external: [
//        ...Object.keys(pkg.dependencies || {}),
//        ...Object.keys(pkg.peerDependencies || {}),
//    ],
//    plugins: [
//        typescript({
//            typescript: require('typescript'),
//        }),
//    ],
//}