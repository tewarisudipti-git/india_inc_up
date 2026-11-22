import { IconArrowLeft, IconArrowUpRight, IconMapPin } from "@tabler/icons-react";
import { Link, useSearchParams } from "react-router";

const mapImage = "https://cdn.builder.io/api/v1/image/assets%2Fcb90f5771ead4f778cb2aa6479abf5dd%2Fdc103d084b7349169c38377619e4f78d?format=webp&width=800&height=1200";

const destinations = [
  {
    id: "mathura", name: "Mathura", region: "BRAJ · WESTERN UTTAR PRADESH", x: 17, y: 39,
    description: "A living pilgrimage city on the Yamuna, Mathura is the heart of Braj. Its temples and ghats take on a special energy during Janmashtami and the many-coloured Holi celebrations.",
    photos: [
      { src: "https://images.pexels.com/photos/29676708/pexels-photo-29676708.jpeg", alt: "Riverside architecture and ghats in Mathura" },
      { src: "https://images.pexels.com/photos/12455914/pexels-photo-12455914.jpeg", alt: "A colourful Indian festival celebration" },
    ],
  },
  {
    id: "agra", name: "Agra", region: "BRAJ · WESTERN UTTAR PRADESH", x: 24, y: 48,
    description: "The Taj Mahal is only the beginning. Agra Fort, Mehtab Bagh and the craft traditions of marble inlay make this Mughal capital a place worth lingering in.",
    photos: [
      { src: "https://images.pexels.com/photos/11948442/pexels-photo-11948442.jpeg", alt: "The Taj Mahal in Agra" },
      { src: "https://images.pexels.com/photos/6753755/pexels-photo-6753755.jpeg", alt: "The Taj Mahal at sunrise" },
    ],
  },
  {
    id: "lucknow", name: "Lucknow", region: "AWADH · CENTRAL UTTAR PRADESH", x: 55, y: 56,
    description: "The capital of Awadh pairs landmark architecture like Bara Imambara with a living culture of poetry, chikankari embroidery, warm hospitality and legendary food.",
    photos: [
      { src: "https://images.pexels.com/photos/37909551/pexels-photo-37909551.jpeg", alt: "Bara Imambara's historic architecture in Lucknow" },
      { src: "https://images.pexels.com/photos/37892690/pexels-photo-37892690.jpeg", alt: "Traditional handloom weaving" },
    ],
  },
  {
    id: "dudhwa", name: "Dudhwa", region: "TERAI · NORTHERN UTTAR PRADESH", x: 55, y: 26,
    description: "A quieter alternative to the city trail, Dudhwa National Park protects a sweep of Terai grasslands and forests, home to tigers, swamp deer and rich birdlife.",
    photos: [
      { src: "https://images.pexels.com/photos/5513464/pexels-photo-5513464.jpeg", alt: "A Bengal tiger moving through grassland" },
      { src: "https://images.pexels.com/photos/35990290/pexels-photo-35990290.jpeg", alt: "An Indian rhinoceros grazing" },
    ],
  },
  {
    id: "sarnath", name: "Sarnath", region: "NEAR VARANASI · EASTERN UTTAR PRADESH", x: 72, y: 73,
    description: "In a peaceful park just beyond Varanasi, the Dhamek Stupa marks where the Buddha gave his first teaching. Sarnath is a powerful place to pause and reflect.",
    photos: [
      { src: "https://images.pexels.com/photos/37160979/pexels-photo-37160979.jpeg", alt: "The Dhamek Stupa at Sarnath" },
      { src: "https://images.pexels.com/photos/13743598/pexels-photo-13743598.jpeg", alt: "A Buddhist temple and garden" },
    ],
  },
  {
    id: "varanasi", name: "Varanasi", region: "EASTERN UTTAR PRADESH", x: 79, y: 77,
    description: "At the ghats of Kashi, dawn boat rides, evening aarti and everyday life meet along the Ganga. Give yourself time to wander the lanes behind the riverfront, too.",
    photos: [
      { src: "https://images.pexels.com/photos/17869813/pexels-photo-17869813.jpeg", alt: "Boats moored on the Ganges in Varanasi" },
      { src: "https://images.pexels.com/photos/38023850/pexels-photo-38023850.jpeg", alt: "Temples and boats along the Ganges" },
    ],
  },
];

export function meta() {
  return [
    { title: "Explore the Map | The Heart of India" },
    { name: "description", content: "Choose a place on the Uttar Pradesh map to explore its story and photographs." },
  ];
}

export default function MapRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = destinations.find((destination) => destination.id === searchParams.get("place")) ?? destinations[0]!;

  return (
    <main className="site-shell map-explorer" id="top">
      <div className="announcement">A LAND OF STORIES, WAITING TO BE DISCOVERED <span>✳</span> अतुल्य उत्तर प्रदेश</div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Uttar Pradesh, home"><span className="brand-mark">✳</span><span>UTTAR<br/><b>PRADESH</b></span></Link>
        <nav aria-label="Main navigation"><Link to="/#story">Our story</Link><Link to="/#places">Places</Link><Link to="/map" aria-current="page">Map explorer</Link></nav>
        <Link className="header-cta" to="/#places">All destinations <IconArrowUpRight size={16}/></Link>
      </header>
      <section className="map-explorer-content">
        <div className="map-explorer-heading"><Link className="map-back" to="/"><IconArrowLeft size={15}/> BACK TO THE STORY</Link><p className="script-label">The journey is yours</p><h1>Pick a place.<br/><em>Find its story.</em></h1><p className="map-explorer-intro">Choose a marked destination on the map, or pick a place below to start exploring.</p></div>
        <div className="map-explorer-grid">
          <div className="explorer-map" aria-label="Interactive map of Uttar Pradesh">
            <img src={mapImage} alt="District map of Uttar Pradesh" />
            {destinations.map((destination) => (
              <button
                aria-label={`Explore ${destination.name}`}
                aria-pressed={active.id === destination.id}
                className={`destination-pin${active.id === destination.id ? " is-active" : ""}`}
                key={destination.id}
                onClick={() => setSearchParams({ place: destination.id }, { preventScrollReset: true })}
                style={{ left: `${destination.x}%`, top: `${destination.y}%` }}
                type="button"
              >
                <span className="pin-dot"><IconMapPin size={15} fill="currentColor" /></span><span className="pin-label">{destination.name}</span>
              </button>
            ))}
          </div>
          <article className="destination-story" aria-live="polite" key={active.id}>
            <div className="destination-story-top"><span>✳ &nbsp; {active.region}</span><span>{String(destinations.findIndex((place) => place.id === active.id) + 1).padStart(2, "0")} / 06</span></div>
            <h2>{active.name}</h2>
            <p className="destination-description">{active.description}</p>
            <div className="destination-gallery">{active.photos.map((photo, index) => <figure key={photo.src}><img src={photo.src} alt={photo.alt}/><figcaption>{active.name} · {index === 0 ? "A place to begin" : "Look a little closer"}</figcaption></figure>)}</div>
            <Link className="destination-link" to={`/#places`}>MEET MORE OF UTTAR PRADESH <IconArrowUpRight size={15}/></Link>
          </article>
        </div>
        <div className="destination-picker" aria-label="Choose a destination">{destinations.map((destination) => <button aria-pressed={active.id === destination.id} key={destination.id} onClick={() => setSearchParams({ place: destination.id }, { preventScrollReset: true })} type="button">{destination.name}<IconArrowUpRight size={14}/></button>)}</div>
      </section>
      <footer><Link className="brand footer-brand" to="/"><span className="brand-mark">✳</span><span>UTTAR<br/><b>PRADESH</b></span></Link><p>THE HEART OF INDIA, OPEN TO EVERYONE.</p><span>MADE FOR THE CURIOUS &nbsp; ✳</span></footer>
    </main>
  );
}
