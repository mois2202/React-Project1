export const Square = ({children, isSelected, updateBoard, index}) => {
  
    const handleClick = () => {
      updateBoard(index)
    }
    return (
      <div onClick={handleClick} className={isSelected !== false ? 'square is-selected' : 'square'}>
        {children}
      </div>
    )
  }