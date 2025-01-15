
function ServiceCard({ title, description }) {
  return (
    <div className="max-w-lg mx-auto md:w-full">
      <h3 className="font-black">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;