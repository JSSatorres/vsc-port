import { useState, ChangeEvent } from 'react'
import { PROJECTS } from '../../../constants/projects'
import { IconSearch } from '@tabler/icons-react'

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
    <div className="text-white">
      <div className="relative flex items-center">
        <input
          type="text"
          className="rounded-md border bg-grey pl-1 pr-2 "
          value={searchTerm}
          onChange={handelChange}
        />
        {!showMatched && (
          <div className="absolute left-3 top-1">
            <IconSearch
              size={19}
              className="text-gray-400 transform rotate-90" // Aplicar rotación de 90 grados solo al icono
            />
            <p className="text-gray-400 ml-2">Search a project</p>
          </div>
        )}
      </div>
      {showMatched && filteredData.length > 0 && (
        <ul className="bg-grey absolute z-10 mt-2 p-2  border rounded-md">
          {filteredData.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default SearchComponent
