export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  rating: number;
  downloads: number;
  version: string;
  size: string;
  category: string;
  features: string[];
  overview: string;
  changelog: ChangelogEntry[];
  screenshots: string[];
  pricing: {
    demo: string;
    single: string;
    multi: string;
  };
}

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string[];
}

export const toolsData: Tool[] = [
  {
    id: 'internet-blocker',
    name: 'App Internet Blocker',
    description: 'Advanced website blocking and productivity tool with scheduling features',
    icon: 'Shield',
    rating: 4.8,
    downloads: 12500,
    version: '2.1.0',
    size: '15.2 MB',
    category: 'Productivity',
    features: [
      'Website blocking with wildcard support',
      'Time-based scheduling',
      'Password protection',
      'Whitelist management',
      'Real-time monitoring',
      'Export/Import settings'
    ],
    overview: 'App Internet Blocker is a powerful tool designed to help you manage your internet usage and improve productivity. With advanced blocking capabilities and flexible scheduling options, you can take control of your digital environment.',
    changelog: [
      {
        version: '2.1.0',
        date: '2024-01-15',
        changes: [
          'Added advanced scheduling features',
          'Improved user interface',
          'Fixed minor bugs',
          'Enhanced performance'
        ]
      },
      {
        version: '2.0.0',
        date: '2023-12-01',
        changes: [
          'Complete UI redesign',
          'Added password protection',
          'New whitelist management',
          'Performance improvements'
        ]
      }
    ],
    screenshots: [
      'Main Interface',
      'Settings Panel',
      'Scheduling'
    ],
    pricing: {
      demo: 'Free',
      single: '450 Rs',
      multi: '850 Rs'
    }
  },
  {
    id: 'battery-tester',
    name: 'Laptop Battery Tester',
    description: 'Comprehensive battery health analysis and optimization software',
    icon: 'Battery',
    rating: 4.9,
    downloads: 8900,
    version: '1.8.2',
    size: '12.8 MB',
    category: 'System Tools',
    features: [
      'Battery health analysis',
      'Performance optimization',
      'Real-time monitoring',
      'Battery calibration',
      'Power consumption tracking',
      'Detailed reports'
    ],
    overview: 'Laptop Battery Tester is a comprehensive tool designed to analyze, monitor, and optimize your laptop\'s battery performance. Get detailed insights into battery health, capacity, and usage patterns.',
    changelog: [
      {
        version: '1.8.2',
        date: '2024-01-10',
        changes: [
          'Added battery calibration tool',
          'Improved accuracy of health analysis',
          'Enhanced reporting features',
          'Bug fixes and performance improvements'
        ]
      },
      {
        version: '1.8.0',
        date: '2023-11-20',
        changes: [
          'New battery health scoring system',
          'Real-time power consumption tracking',
          'Export reports to PDF',
          'UI improvements'
        ]
      }
    ],
    screenshots: [
      'Battery Health',
      'Performance Monitor',
      'Calibration Tool'
    ],
    pricing: {
      demo: 'Free',
      single: '350 Rs',
      multi: '650 Rs'
    }
  },
  {
    id: 'pc-diagnostic',
    name: 'PC Diagnostic Tool',
    description: 'Complete system diagnostics and performance optimization suite',
    icon: 'Monitor',
    rating: 4.7,
    downloads: 15600,
    version: '3.2.1',
    size: '28.5 MB',
    category: 'System Tools',
    features: [
      'Complete system scan',
      'Hardware diagnostics',
      'Performance optimization',
      'Driver management',
      'System cleanup',
      'Real-time monitoring'
    ],
    overview: 'PC Diagnostic Tool provides comprehensive system analysis and optimization. Monitor hardware health, clean unnecessary files, and optimize your system for peak performance.',
    changelog: [
      {
        version: '3.2.1',
        date: '2024-01-20',
        changes: [
          'Added new hardware detection',
          'Improved scan accuracy',
          'Enhanced cleanup algorithms',
          'Updated driver database'
        ]
      },
      {
        version: '3.2.0',
        date: '2023-12-15',
        changes: [
          'New system optimization engine',
          'Advanced driver management',
          'Real-time performance monitoring',
          'Improved user interface'
        ]
      }
    ],
    screenshots: [
      'System Overview',
      'Hardware Diagnostics',
      'Performance Monitor'
    ],
    pricing: {
      demo: 'Free',
      single: '550 Rs',
      multi: '950 Rs'
    }
  }
];

export const getToolById = (id: string): Tool | undefined => {
  return toolsData.find(tool => tool.id === id);
};

export const getAllTools = (): Tool[] => {
  return toolsData;
};

export const getToolsByCategory = (category: string): Tool[] => {
  return toolsData.filter(tool => tool.category === category);
}; 