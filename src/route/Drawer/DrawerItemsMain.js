export const drawerItemsMain = [
  {
    key: 'Home',
    title: 'Home',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
  },
  {
    key: 'TimeSheets',
    title: 'Time Sheets',
    routes: [
      {nav: 'MainDrawer', routeName: 'Attendances', title: 'Attendances'},
      {
        nav: 'MainDrawer',
        routeName: 'DateWiseAttendances',
        title: 'Date Wise Attendances',
      },
      {
        nav: 'MainDrawer',
        routeName: 'MonthlyAttendances',
        title: 'Monthly Attendances',
      },
      {
        nav: 'MainDrawer',
        routeName: 'ApproveEmployeeLeaves',
        title: 'Approve Employee Leaves',
      },
    ],
  },
  {
    key: 'Organization',
    title: 'Organization',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'Announcements',
        title: 'Announcements',
      },
      {
        nav: 'MainDrawer',
        routeName: 'CompanyPolicy',
        title: 'Company Policy',
      },
    ],
  },
  {
    key: 'HrCalenders',
    title: 'HR Calenders',
    routes: [
      {nav: 'MainDrawer', routeName: 'HrCalenders', title: 'HR Calenders'},
    ],
  },
  {
    key: 'Assets',
    title: 'Assets',
    routes: [{nav: 'MainDrawer', routeName: 'Assets', title: 'Assets'}],
  },
];

export const drawerItemsSubMain = [
  {
    key: 'Home',
    title: 'Dashboard',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
  },
  {
    key: 'Profile',
    title: 'Profile',
    routes: [
      {nav: 'BasicInfo', routeName: 'BasicInfo', title: 'Basic Info'},
      {
        nav: 'MainDrawer',
        routeName: 'DateWiseAttendances',
        title: 'Date Wise Attendances',
      },
      {
        nav: 'MainDrawer',
        routeName: 'MonthlyAttendances',
        title: 'Monthly Attendances',
      },
      {
        nav: 'MainDrawer',
        routeName: 'ApproveEmployeeLeaves',
        title: 'Approve Employee Leaves',
      },
    ],
  },
  {
    key: 'Organization',
    title: 'Organization',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'Announcements',
        title: 'Announcements',
      },
      {
        nav: 'MainDrawer',
        routeName: 'CompanyPolicy',
        title: 'Company Policy',
      },
    ],
  },
  {
    key: 'HrCalenders',
    title: 'HR Calenders',
    routes: [
      {nav: 'MainDrawer', routeName: 'HrCalenders', title: 'HR Calenders'},
    ],
  },
  {
    key: 'Assets',
    title: 'Assets',
    routes: [{nav: 'MainDrawer', routeName: 'Assets', title: 'Assets'}],
  },
];
