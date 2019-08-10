const Menu = [{
    header: 'Pedido'
  },
  {
    title: 'Proovedor',
    group: 'Maestras',
    icon: 'dashboard',
    name: 'Proovedor',
    href: '/dashboard'
  },
  {
    title: 'Empty',
    group: 'extra',
    icon: 'insert_drive_file',
    href: '/empty'
  },
  {
    divider: true
  },
  {
    header: 'Almacen'
  },
  {
    title: 'General',
    group: 'components',
    component: 'components',
    icon: 'tune',
    items: [{
        name: 'icons',
        title: 'Icons',
        href: '/general/icons'
      },
      {
        name: 'tables',
        title: 'Data Tables',
        href: '/general/tables'
      },
      {
        name: 'snackbar',
        title: 'Snackbar',
        href: '/general/snackbar'
      },

    ]
  },
  {
    title: 'Forms & Controls',
    group: 'forms',
    component: 'forms',
    icon: 'edit',
    items: [{
        name: 'basic',
        title: 'General',
        href: '/forms/basic-forms'
      },
      {
        name: 'selects',
        title: 'Selects',
        badge: 'new',
        href: '/forms/selects'
      },
      {
        name: 'selection-controls',
        title: 'Selection Controls',
        href: '/forms/selection-controls'
      },
      {
        name: 'text-fields',
        title: 'Text Fields',
        href: '/forms/text-fields'
      },
      {
        name: 'steppers',
        title: 'Steppers',
        href: '/forms/steppers'
      },
      {
        name: 'editors',
        title: 'Editors',
        href: '/forms/editors'
      }
    ]
  },

];
// reorder menu
Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }
});

export default Menu;
