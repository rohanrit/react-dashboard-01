
const FeatureCard = ({ children, bg = 'bg-white' }) => {
  return (
        <div className={`${bg} px-6 py-8 border rounded-lg shadow-md`}>{ children }</div>
  )
}

export default FeatureCard