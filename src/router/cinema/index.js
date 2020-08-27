export default {
  path : '/cinema',
  component : () => import('@/views/Cinema'),
  /* children : [
    {
      path : 'wholecity',
      component : () => import('@/components/WholeCity')
    },
    {
      path : 'brand',
      component : () => import('@/components/WholeCity')
    },
    {
      path : 'feature',
      component : () => import('@/components/WholeCity')
    },
    {
      path : '/cinema',
      redirect: '/cinema/wholecity'
    }
  ] */
}