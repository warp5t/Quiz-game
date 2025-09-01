import { useEffect, useRef, useState } from 'react'
import { FlexBox } from '../../reusalbleComponents/FlexBox/FlexBox'

interface INameId {
  id: number
  name: string
}

interface ICategories {
  trivia_categories: Array<INameId>
}

export const Categories = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ICategories | null>(null)
  const [error, setError] = useState<string | null>(null)

  const selectRef = useRef<HTMLSelectElement>(null)

  // const getSelectedValue = () => {
  //   return selectRef.current?.value || '';
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://opentdb.com/api_category.php')

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
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
      <select ref={selectRef} defaultValue=''>
        <option value=''>Choose the category</option>
        {data?.trivia_categories.map((el: INameId) => (
          <option key={el.id} value={el.name}>
            {el.name}
          </option>
        ))}
      </select>
    </FlexBox>
  )
}
