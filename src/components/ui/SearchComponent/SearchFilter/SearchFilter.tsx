import { ChangeEvent } from 'react'

interface SearchFilterProps {
  handelChange: (arg0: string) => void
}

const SearchFilter: React.FC<SearchFilterProps> = ({ handelChange }) => {
  const handelChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    handelChange(e.target.value)
  }

  return (
    <input
      type="text"
      className="rounded-md border bg-grey pl-1 pr-2 w-80 sticky"
      onChange={handelChangeInput}
      placeholder="type a project"
    />
  )
}

export default SearchFilter
