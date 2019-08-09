const Menu = [
  { header: 'Pedido' },
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
  { divider: true },
  { header: 'Almacen' },
  {
    title: 'General',
    group: 'components',
    component: 'components',
    icon: 'tune',
    items: [
      { name: 'alerts', title: 'Alerts', href: '/general/alerts' },
      { name: 'avatars', title: 'Avatars', href: '/general/avatars' },
      { name: 'badges', title: 'Badges', href: '/general/badges' },
      { name: 'buttons', title: 'Buttons', href: '/general/buttons' },
      { name: 'cards', title: 'Cards', href: '/general/cards' },
      { name: 'carousels', title: 'Carousels', href: '/general/carousels' },
      { name: 'chips', title: 'Chips', href: '/general/chips' },
      { name: 'dialogs', title: 'Dialogs', href: '/general/dialogs' },
      { name: 'icons', title: 'Icons', href: '/general/icons' },
      { name: 'tables', title: 'Data Tables', href: '/general/tables' },
      { name: 'parallax', title: 'Parallax  image', href: '/general/parallax' },
      { name: 'snackbar', title: 'Snackbar', href: '/general/snackbar' },
      { name: 'progress', title: 'Progress', href: '/general/progress' },
      { name: 'slider', title: 'Slider', href: '/general/sliders' },
      { name: 'tooltip', title: 'Tooltip', href: '/general/tooltips' },
      { name: 'pagination', title: 'Pagination', href: '/general/pagination' },
      { name: 'typography', title: 'Typography', href: '/general/typography' },
      { name: 'color', title: 'Color', href: '/general/colors' }
    ]
  },
  {
    title: 'Forms & Controls',
    group: 'forms',
    component: 'forms',
    icon: 'edit',
    items: [
      { name: 'basic', title: 'General', href: '/forms/basic-forms' },
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
      { name: 'text-fields', title: 'Text Fields', href: '/forms/text-fields' },
      { name: 'steppers', title: 'Steppers', href: '/forms/steppers' },
      { name: 'editors', title: 'Editors', href: '/forms/editors' }
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
