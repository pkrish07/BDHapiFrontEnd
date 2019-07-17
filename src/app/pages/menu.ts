export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    // {
    //     path: 'icon',
    //     title: 'Icon',
    //     icon: 'diamond'
    // },
    // {
    //     path: 'profile',
    //     title: 'User Profile',
    //     icon: 'user'
    // },
    // {
    //     path: 'ui',
    //     title: 'UI Element',
    //     icon: 'paint-brush',
    //     children: [
    //         {
    //             path: 'grid',
    //             title: 'Bootstrap Grid'
    //         },
    //         {
    //             path: 'buttons',
    //             title: 'Buttons'
    //         },
    //         {
    //             path: 'notification',
    //             title: 'Notification'
    //         },
    //         {
    //             path: 'tabs',
    //             title: 'Tabs'
    //         },
    //         {
    //             path: 'file-tree',
    //             title: 'File Tree'
    //         },
    //         {
    //             path: 'modals',
    //             title: 'Modals'
    //         },
    //         {
    //             path: 'progress-bar',
    //             title: 'ProgressBar'
    //         },
    //         /*  {
    //              path: 'loading',
    //              title: 'Loading'
    //          }, */
    //     ]
    // },
    {
        path: 'form',
        title: 'Submit Form to PSE',
        icon: 'check-square-o',
        children: [
            {
                path: 'form-inputs',
                title: 'Form Inputs'
            },
            // {
            //     path: 'form-layouts',
            //     title: 'Form Layouts'
            // },
            // {
            //     path: 'file-upload',
            //     title: 'File Upload'
            // },
            // {
            //     path: 'ng2-select',
            //     title: 'Ng2-Select'
            // }
        ]
    },
    {
        path: 'charts',
        title: 'Visualize Data',
        icon: 'bar-chart',
        children: [
            {
                path: 'echarts',
                title: 'Metrics'
            }
        ]
    },
    {
        path: 'table',
        title: 'Log Tables',
        icon: 'table',
        children: [
            {
                path: 'basic-tables',
                title: 'Raw Log Files'
            },
            {
                path: 'data-table',
                title: 'Parsed Log Files'
            }
        ]
    }
    // {
    //     path: 'menu-levels',
    //     title: 'Menu Levels',
    //     icon: 'sitemap',
    //     children: [
    //         {
    //             path: 'levels1',
    //             title: 'Menu Level1',
    //             children: [
    //                 {
    //                     path: 'levels1-1',
    //                     title: 'Menu Level1-1'
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'levels2',
    //             title: 'Menu Level2'
    //         }
    //     ]
    // },
];
