import { useEffect, useState } from 'react'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'
import { setCategory, type ICategory } from '../../slicers/quizSetting/quizSettingSlice' // Импортируем ICategory из slice
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../store/store'

interface ICategories {
  trivia_categories: Array<ICategory>
}

export const Categories = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ICategories | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategoryId, setSelectedCategoryId] = useState('')

  const dispatch = useDispatch<AppDispatch>()

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = event.target.value
    setSelectedCategoryId(categoryId)

    if (categoryId && data) {
      const selectedCategory = data.trivia_categories.find((cat: ICategory) => cat.id.toString() === categoryId)
      dispatch(setCategory(selectedCategory || null))
    } else {
      dispatch(setCategory(null))
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://opentdb.com/api_category.php')
        if (!response.ok) throw new Error('Network response was not ok')
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div>...Loading</div>
  if (error) return <div>Error: {error}</div>

  return (
    <FlexBox flexDirection='column'>
      <h3>Category</h3>
      <select value={selectedCategoryId} onChange={handleCategoryChange}>
        <option value=''>Choose the category</option>
        {data?.trivia_categories.map((el: ICategory) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </FlexBox>
  )
}
