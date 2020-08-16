export default {
  path : '/cinema',
  component : () => import('@/views/Cinema'),
  children : [
    {
      path : 'wholecity',
      component : () => import('@/components/WholeCity')
    },
    {
      path : 'brand',
      component : () => import('@/components/Brand')
    },
    {
      path : 'feature',
      component : () => import('@/components/Feature')
    },
    {
      path : '/cinema',
      redirect: '/cinema/wholecity'
    }
  ]
}