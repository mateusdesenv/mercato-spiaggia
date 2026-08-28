export interface Product {
  id: string
  name: string
  producer: string
  region: string
  price: number
  category: 'Vinho Tinto' | 'Vinho Branco' | 'Espumante' | 'Destilado'
  rating: number
  tags: string[]
}
