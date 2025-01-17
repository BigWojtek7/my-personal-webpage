function ServiceCard({ title, description }) {
  return (
    <div className="mx-auto max-w-lg md:w-full">
      <h3 className="font-black">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
