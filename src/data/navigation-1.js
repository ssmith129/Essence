// CUSTOM ICON COMPONENT
import duotone from '@/icons/duotone';
export const navigations = [{
  type: 'label',
  label: 'Dashboard'
}, {
  name: 'Analytics',
  icon: duotone.PersonChalkboard,
  children: [{
    name: 'Analytics 1',
    path: '/dashboard'
  }, {
    name: 'Analytics 2',
    path: '/dashboard/analytics-2'
  }]
}, {
  name: 'Finance',
  icon: duotone.MessagesDollar,
  children: [{
    name: 'Finance 1',
    path: '/dashboard/finance'
  }, {
    name: 'Finance 2',
    path: '/dashboard/finance-2'
  }]
}, {
  name: 'CRM',
  icon: duotone.CommentsQuestionCheck,
  children: [{
    name: 'CRM',
    path: '/dashboard/crm'
  }, {
    name: 'CRM 2',
    path: '/dashboard/crm-2'
  }]
}, {
  name: 'Sales',
  icon: duotone.Ecommerce,
  children: [{
    name: 'Sales',
    path: '/dashboard/sales'
  }, {
    name: 'Sales 2',
    path: '/dashboard/sales-2'
  }]
}, {
  name: 'Ecommerce',
  path: '/dashboard/ecommerce',
  icon: duotone.RectangleCirclePlus
}, {
  name: 'Logistics',
  path: '/dashboard/logistics',
  icon: duotone.DiagramProject
}, {
  name: 'Marketing',
  path: '/dashboard/marketing',
  icon: duotone.LayerGroup
}, {
  name: 'LMS',
  path: '/dashboard/learning-management',
  icon: duotone.PersonCircleCheck
}, {
  name: 'Job Management',
  path: '/dashboard/job-management',
  icon: duotone.PersonCircleCheck
}, {
  type: 'label',
  label: 'Management'
}, {
  name: 'Profile',
  icon: duotone.UserProfile,
  path: '/dashboard/profile'
}, {
  name: 'Account',
  icon: duotone.Accounts,
  path: '/dashboard/account'
}, {
  name: 'Users',
  icon: duotone.UserList,
  children: [{
    name: 'Add User',
    path: '/dashboard/users/add-user'
  }, {
    name: 'User List 1',
    path: '/dashboard/users/user-list-1'
  }, {
    name: 'User Grid 1',
    path: '/dashboard/users/user-grid-1'
  }, {
    name: 'User List 2',
    path: '/dashboard/users/user-list-2'
  }, {
    name: 'User Grid 2',
    path: '/dashboard/users/user-grid-2'
  }]
}, {
  name: 'Products',
  icon: duotone.AdminEcommerce,
  children: [{
    name: 'Product List',
    path: '/dashboard/products/product-list-view'
  }, {
    name: 'Product Grid',
    path: '/dashboard/products/product-grid-view'
  }, {
    name: 'Create Product',
    path: '/dashboard/products/create-product'
  }, {
    name: 'Product Details',
    path: '/dashboard/products/product-details'
  }]
}, {
  name: 'Invoice',
  icon: duotone.Invoice,
  children: [{
    name: 'Invoice List',
    path: '/dashboard/invoices/invoice-list'
  }, {
    name: 'Invoice Details',
    path: '/dashboard/invoices/invoice-details'
  }, {
    name: 'Create Invoice',
    path: '/dashboard/invoices/create-invoice'
  }]
}, {
  name: 'Ecommerce',
  icon: duotone.Ecommerce,
  children: [{
    name: 'Cart',
    path: '/dashboard/cart'
  }, {
    name: 'Payment',
    path: '/dashboard/payment'
  }, {
    name: 'Billing Address',
    path: '/dashboard/billing-address'
  }, {
    name: 'Payment Complete',
    path: '/dashboard/payment-complete'
  }]
}, {
  name: 'Projects',
  icon: duotone.ProjectChart,
  children: [{
    name: 'Project 1',
    path: '/dashboard/projects/project-1'
  }, {
    name: 'Project 2',
    path: '/dashboard/projects/project-2'
  }, {
    name: 'Project 3',
    path: '/dashboard/projects/project-3'
  }, {
    name: 'Project Details',
    path: '/dashboard/projects/details'
  }, {
    name: 'Team Member',
    path: '/dashboard/projects/team-member'
  }]
}, {
  name: 'Data Table',
  icon: duotone.DataTable,
  children: [{
    name: 'Data Table 1',
    path: '/dashboard/data-tables/table-1'
  }]
}, {
  type: 'label',
  label: 'Apps'
}, {
  name: 'Todo List',
  icon: duotone.TodoList,
  path: '/dashboard/todo-list'
}, {
  name: 'Chats',
  icon: duotone.Chat,
  path: '/dashboard/chat'
}, {
  name: 'Email',
  icon: duotone.Inbox,
  children: [{
    name: 'Inbox',
    path: '/dashboard/email/inbox'
  }, {
    name: 'Email Details',
    path: '/dashboard/email/details'
  }, {
    name: 'Create Email',
    path: '/dashboard/email/compose'
  }]
}, {
  name: 'Pages',
  icon: duotone.Pages,
  children: [{
    iconText: 'E',
    name: 'Ecommerce',
    path: '#ecommerce',
    children: [{
      name: 'Shop',
      path: '/products'
    }, {
      name: 'Product Details',
      path: '/products/Wu4GdphiI0F48eMQZ_zBJ'
    }, {
      name: 'Cart',
      path: '/cart'
    }, {
      name: 'Checkout',
      path: '/checkout'
    }]
  }, {
    iconText: 'C',
    name: 'Career',
    path: '#career',
    children: [{
      name: 'Career (Admin)',
      path: '/dashboard/career'
    }, {
      name: 'Career (Public)',
      path: '/career'
    }, {
      name: 'Job Details',
      path: '/career/designer'
    }, {
      name: 'Job Apply',
      path: '/career/designer/apply'
    }]
  }, {
    name: 'About (Admin)',
    path: '/dashboard/about'
  }, {
    name: 'About (Public)',
    path: '/about-us'
  }, {
    name: 'Contact',
    path: '/contact-us'
  }, {
    name: 'Faq',
    path: '/faqs'
  }, {
    name: 'Pricing',
    path: '/pricing'
  }, {
    name: 'Support',
    path: '/dashboard/support'
  }, {
    name: 'Create Ticket',
    path: '/dashboard/create-ticket'
  }, {
    name: 'File Manager',
    path: '/dashboard/file-manager'
  }]
}, {
  type: 'extLink',
  name: 'Documentation',
  icon: duotone.FileCircleQuestion,
  path: 'https://essence-doc.vercel.app/'
}, {
  type: 'label',
  label: 'Others'
}, {
  path: 'https://essence-doc.vercel.app/',
  name: 'Item Disabled',
  icon: duotone.Folder,
  disabled: true
}, {
  name: 'Multi Level Item',
  icon: duotone.Apps,
  children: [{
    name: 'Level A',
    path: '#dashboard/cart'
  }, {
    iconText: 'B',
    name: 'Level B',
    path: '#dashboard/payment',
    children: [{
      name: 'Level B1',
      path: '#dashboard/payment'
    }, {
      iconText: 'B',
      name: 'Level B2',
      path: '#dashboard/payment',
      children: [{
        name: 'Level B21',
        path: '#dashboard/payment'
      }, {
        name: 'Level B22',
        path: '#dashboard/payment'
      }]
    }]
  }]
}];