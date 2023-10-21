import { IconSearch } from '@tabler/icons-react'

interface SearchButtonProps {
  handleShowSearch: () => void
}

const SearchButton: React.FC<SearchButtonProps> = ({ handleShowSearch }) => {
  return (
    <button
      className="flex justify-center bg-grey border rounded-md w-60 "
      onClick={handleShowSearch}
    >
      <IconSearch
        size={19}
        className="text-gray-400 transform rotate-90 mt-1"
      />
      <p className="text-gray-400 ml-2">Search a project</p>
    </button>
  )
}

export default SearchButton
