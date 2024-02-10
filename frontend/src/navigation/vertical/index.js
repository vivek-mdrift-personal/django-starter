const navigation = () => {
  return [
    {
      title: 'Dashboard',
      path: '/home',
      icon: 'tabler:smart-home',
      badgeContent: '19'
    },
    {
      title: 'Events',
      path: '/events',
      icon: 'tabler:calendar'
    },
    {
      path: '/content',
      action: 'read',
      subject: 'Content',
      title: 'Content',
      icon: 'tabler:id',
      badgeContent: '19'
    },
    {
      path: '/community',
      action: 'read',
      subject: 'community',
      title: 'Community',
      icon: 'tabler:messages'
    },
    {
      title: 'Settings & Admin',
      icon: 'tabler:settings',
      children: [
        {
          title: 'User & Role',
          path: '/settings-admin'
        }
      ]
    },

    {
      path: 'maintenance',
      action: 'read',
      subject: 'acl-page',
      title: 'Concierge',
      icon: 'tabler:user'
    },
    {
      path: 'maintenance',
      action: 'read',
      subject: 'acl-page',
      title: 'Search',
      icon: 'tabler:search'
    }
  ]
}

export default navigation
