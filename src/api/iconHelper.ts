import { Shield, Battery, Monitor, Download, Star, FileText, Image, BarChart3, History } from 'lucide-react'

export const getIconComponent = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'shield':
      return Shield
    case 'battery':
      return Battery
    case 'monitor':
      return Monitor
    case 'download':
      return Download
    case 'star':
      return Star
    case 'filetext':
      return FileText
    case 'image':
      return Image
    case 'barchart3':
      return BarChart3
    case 'history':
      return History
    default:
      return Shield
  }
} 