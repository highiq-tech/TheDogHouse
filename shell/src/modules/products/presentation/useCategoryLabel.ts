import { t } from 'utils'

import { Category } from '../types'

export const useCategoryLabel = (category: Category) => {
  const message = messages[category]
  return (t(message) as string) ?? category
}

const messages = {
  [Category.PET_FOOD]: 'Pet Food',
  [Category.PET_TREATS]: 'Pet Treats',
  [Category.PET_GROOMING]: 'Pet Grooming',
  [Category.PET_BOARDING]: 'Pet Boarding',
  [Category.PET_TRAINING]: 'Pet Training',
}
