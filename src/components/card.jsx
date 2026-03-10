const Card = ({ title, description, className = "" }) => (
  <div className={className}>
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">{title}</h2>
    <p className="text-base md:text-lg lg:text-xl opacity-70">{description}</p>
  </div>
)

export default Card
