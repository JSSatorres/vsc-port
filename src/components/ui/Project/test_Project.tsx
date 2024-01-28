import { render, fireEvent } from '@testing-library/react'
import Project from './Project'
import '@testing-library/jest-dom/extend-expect'

const mockProject = {
  id: '123',
  name: 'Sample Project',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  description: 'Sample description',
  mainTechnology: 'React',
  language: 'TypeScript',
  isFocused: false,
}

describe('<Project />', () => {
  test('should render project details correctly', () => {
    const { getByText } = render(<Project dataProject={mockProject} />)

    expect(getByText(mockProject.name)).toBeInTheDocument()
    expect(getByText(`Language: ${mockProject.language}`)).toBeInTheDocument()
    expect(
      getByText(`Main Technology: ${mockProject.mainTechnology}`),
    ).toBeInTheDocument()

    mockProject.technologies.forEach((technology) => {
      expect(getByText(technology)).toBeInTheDocument()
    })
  })

  test('should call deleteProjectDispatch when delete button is clicked', () => {
    const deleteProjectDispatch = jest.fn()
    const { getByTestId } = render(
      <Project
        dataProject={mockProject}
        deleteProjectDispatch={deleteProjectDispatch}
      />,
    )

    fireEvent.click(getByTestId('delete-button'))

    expect(deleteProjectDispatch).toHaveBeenCalledWith(mockProject.id)
  })
})
