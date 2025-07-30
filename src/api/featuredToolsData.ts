export interface FeaturedTool {
  id: string;
  name: string;
  description: string;
  icon: string;
  rating: number;
  downloads: number;
  features: string[];
  link: string;
}

export const featuredToolsData: FeaturedTool[] = [
  {
    id: 'internet-blocker',
    name: 'App Internet Blocker',
    description: 'Advanced website blocking and productivity tool with scheduling features',
    icon: 'Shield',
    rating: 4.8,
    downloads: 12500,
    features: ['Website Blocking', 'Scheduling', 'Password Protection'],
    link: '/internet-blocker'
  },
  {
    id: 'battery-tester',
    name: 'Laptop Battery Tester',
    description: 'Comprehensive battery health analysis and optimization software',
    icon: 'Battery',
    rating: 4.9,
    downloads: 8900,
    features: ['Health Analysis', 'Optimization', 'Real-time Monitoring'],
    link: '/battery-tester'
  },
  {
    id: 'pc-diagnostic',
    name: 'PC Diagnostic Tool',
    description: 'Complete system diagnostics and performance optimization suite',
    icon: 'Monitor',
    rating: 4.7,
    downloads: 15600,
    features: ['System Scan', 'Hardware Diagnostics', 'Performance Optimization'],
    link: '/downloads'
  }
];

export const getFeaturedTools = (): FeaturedTool[] => {
  return featuredToolsData;
};

export const getFeaturedToolById = (id: string): FeaturedTool | undefined => {
  return featuredToolsData.find(tool => tool.id === id);
}; 