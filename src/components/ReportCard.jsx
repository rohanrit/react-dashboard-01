const ReportCard = ({ children, bg = 'bg-white' }) => {
  return (
    <div className='flex flex-col gap-5'>{ children }</div>
  )
}

export default ReportCard