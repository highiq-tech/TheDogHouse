import { Category, IProduct } from 'modules/products/types'

import { createFixture } from './createFixture'

export const ProductFixture = createFixture<IProduct>({
  id: 1,
  title: 'Blue Buffalo Dog Food',
  category: Category.PET_FOOD,
  price: 29.99,
  image:
    'https://images.unsplash.com/photo-1608408891486-f5cade977d19?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1050',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, blanditiis cum debitis doloremque?',
  rating: {
    rate: 3.8,
    count: 250,
  },
})
