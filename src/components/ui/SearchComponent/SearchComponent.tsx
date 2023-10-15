import { useState, ChangeEvent } from 'react'
import { PROJECTS } from '../../../constants/projects'

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [showMatched, setShowMatched] = useState(false)

  const filteredData = PROJECTS.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)

    setShowMatched(e.target.value.length > 0)
    console.log(e.target.value.length > 0)
  }

  return (
    <div className="bg-grey">
      <input
        type="text"
        className="w-64  rounded-md border bg-grey"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={handelChange}
      />
      {showMatched && filteredData.length > 0 && (
        <ul className="absolute z-10 mt-2 p-2 bg-white border rounded-md">
          {filteredData.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default SearchComponent
