/**
 * router map
 *
 */
export default [
    {
        name: 'home',
        path: '/',
        component: function(resolve) {
			//异步加载组件
            require.async(['/src/views/home/home.vue'], (view) => {
                resolve(view)
            })
		}
    }
]
