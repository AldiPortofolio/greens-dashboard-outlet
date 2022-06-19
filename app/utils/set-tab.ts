export const getTabOrder = (path: string) => {
  switch (path) {
    case '/order/new':
      return 'newOrder';
    case '/order/process':
      return 'orderonProcess';
    case '/order/completed':
      return 'orderCompleted';
    case '/order/rejected':
      return 'orderRejected';
    default:
      break;
  }
};

export const getTabMenu = (path: string) => {
  switch (path) {
    case '/menus':
      return 'allMenu';
    case '/menus/available':
      return 'available';
    case '/menus/not-available':
      return 'notAvailable';
    default:
      break;
  }
};

export const getTabAside = (path: string) => {
  if (path.includes('dashboard')) {
    return { title: 'Dashboard', aside: 'dashboard' };
  }

  if (path.includes('order')) {
    return { title: 'Orders', aside: 'orders' };
  }

  if (path.includes('menus')) {
    return { title: 'Menus', aside: 'menus' };
  }

  if (path.includes('greens-pod')) {
    return { title: 'Greens Pod', aside: 'greens-pod' };
  }

  if (path.includes('settings')) {
    return { title: 'Settings', aside: 'settings' };
  }
};
