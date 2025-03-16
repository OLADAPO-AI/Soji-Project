const CardGrid = () => {
  const cards = [
    {
      img: 'https://tecdn.b-cdn.net/img/new/standard/city/041.webp',
      location: 'New York Office',
      address: '123 Broadway, Suite 1001, New York, NY 10001, USA',
      phone: '+1 (212) 555-1234',
    },
    {
      img: 'https://tecdn.b-cdn.net/img/new/standard/city/042.webp',
      location: 'London Office',
      address: '45 King Street, London, EC2V 8AE, United Kingdom',
      phone: '+44 (0)20 7946 0958',
    },
    {
      img: 'https://tecdn.b-cdn.net/img/new/standard/city/044.webp',
      location: 'Tokyo Office',
      address: '1-2-3 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan',
      phone: '+81 (0)3 1234 5678',
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col self-start rounded-lg text-gray-900 shadow-lg sm:shrink-0 sm:grow sm:basis-0 w-full sm:w-1/2 lg:w-1/3 overflow-hidden"
        >
          <img
            className="w-full h-48 object-cover"
            src={card.img}
            alt={card.location}
          />
          <div className="p-6">
            <h5 className="mb-4 text-xl font-semibold leading-tight">
              {card.location}
            </h5>
            <p className="mb-4 text-base text-gray-600">{card.address}</p>
            <p className="text-base text-gray-600">
              <strong>Phone:</strong> {card.phone}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardGrid
