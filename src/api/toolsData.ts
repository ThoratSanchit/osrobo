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
  screenshots: {
    id: string;
    title: string;
    description: string;
    url: string;
    alt: string;
  }[];
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
      {
        id: 'ib-main',
        title: 'Main Interface',
        description: 'Clean and intuitive main dashboard with website blocking controls',
        url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center',
        alt: 'Internet Blocker Main Interface'
      },
      {
        id: 'ib-settings',
        title: 'Settings Panel',
        description: 'Advanced configuration options and scheduling settings',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
        alt: 'Internet Blocker Settings Panel'
      },
      {
        id: 'ib-schedule',
        title: 'Scheduling',
        description: 'Time-based blocking and productivity scheduling interface',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center',
        alt: 'Internet Blocker Scheduling Interface'
      }
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
      {
        id: 'bt-health',
        title: 'Battery Health',
        description: 'Comprehensive battery health analysis and status overview',
        url: 'https://images.unsplash.com/photo-1609592806598-04c4d7e5c1e8?w=800&h=600&fit=crop&crop=center',
        alt: 'Battery Health Analysis'
      },
      {
        id: 'bt-monitor',
        title: 'Performance Monitor',
        description: 'Real-time battery performance monitoring and statistics',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
        alt: 'Battery Performance Monitor'
      },
      {
        id: 'bt-calibration',
        title: 'Calibration Tool',
        description: 'Advanced battery calibration and optimization tools',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center',
        alt: 'Battery Calibration Tool'
      }
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
      {
        id: 'pd-overview',
        title: 'System Overview',
        description: 'Complete system health overview and performance metrics',
        url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center',
        alt: 'PC Diagnostic System Overview'
      },
      {
        id: 'pd-hardware',
        title: 'Hardware Diagnostics',
        description: 'Detailed hardware analysis and component health check',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
        alt: 'PC Diagnostic Hardware Analysis'
      },
      {
        id: 'pd-performance',
        title: 'Performance Monitor',
        description: 'Real-time system performance monitoring and optimization',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center',
        alt: 'PC Diagnostic Performance Monitor'
      }
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

export const getFeaturedTools = (): Tool[] => {
  return toolsData.filter(tool => ['internet-blocker', 'battery-tester', 'pc-diagnostic'].includes(tool.id));
}; 