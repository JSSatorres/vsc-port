import { useEffect, useState } from 'react'
import { PROJECTS } from '../../../constants/projects'
import { IconX } from '@tabler/icons-react'
import SearchButton from './SearchButton/SearchButton'
import SearchFilter from './SearchFilter/SearchFilter'
import SearchList from './SearchList/SearchList'

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [showSearch, setShowSearch] = useState(false)

  const filteredData = PROJECTS.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const handleShowSearch = () => {
    setShowSearch((prev) => !prev)
  }

  const handelChange = (value: string) => {
    setSearchTerm(value)
  }

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const targetElement = event?.target

      if (!(targetElement instanceof HTMLElement)) return

      const buttonContainer = targetElement?.closest('.search-button-container')
      const searchComponentContainer = targetElement?.closest(
        '.search-component-container',
      )

      if (!searchComponentContainer && !buttonContainer && showSearch) {
        setShowSearch(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [showSearch])

  return (
    <div className="search-component-container text-white w-40 ">
      {!showSearch ? (
        <SearchButton handleShowSearch={handleShowSearch} />
      ) : (
        <div className="bg-black z-10 p-2 absolute top-1 left-1/2 transform -translate-x-1/2 shadow-lg ">
          <div className="flex w-full relative">
            <SearchFilter handelChange={handelChange} />
            <IconX
              className="cursor-pointer ml-4 mr-1 hover:bg-grey"
              onClick={handleShowSearch}
            />
          </div>
          <SearchList
            filteredData={filteredData}
            handleShowSearch={handleShowSearch}
          />
        </div>
      )}
    </div>
  )
}
export default SearchComponent
