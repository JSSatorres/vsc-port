import { Project, type IdFormat } from '../../../../types'
import { IconPlayerPlayFilled } from '@tabler/icons-react'
import '../../../../assets/css/scrollbar/scrollbar.css'
import { useDisplayScreen } from '../../../../hook/useDisplayScreen'

interface SearchListProps {
  filteredData: Project[]
  handleShowSearch: () => void
}

const SearchList: React.FC<SearchListProps> = ({
  filteredData,
  handleShowSearch,
}) => {
  console.log(filteredData)
  const { addProject } = useDisplayScreen()

  const handleClick = (id: IdFormat): void => {
    addProject(id)
    handleShowSearch()
  }

  return (
    <div className="rounded-md max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300">
      {filteredData.length > 0 && (
        <ul className="mt-5">
          {filteredData.map((item) => (
            <li
              key={item.id}
              className="flex mt-1 transition duration-100 cursor-pointer hover:bg-grey"
              onClick={() => handleClick(item.id)}
            >
              <IconPlayerPlayFilled className=" pr-1" color="blue" size={24} />
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchList
