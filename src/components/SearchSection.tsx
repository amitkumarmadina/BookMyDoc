import { useEffect, useState } from "react";

type Location = {
  city: string;
  lat?: number;
  lng?: number;
};

type Suggestion = {
  display_name: string;
  lat: string;
  lon: string;
};

const SearchSection = () => {
  const [location, setLocation] = useState<Location>({ city: "" });
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLocations = async (value: string) => {
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}&limit=5`
      );
      const data = await res.json();
      setSuggestions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationChange = (value: string) => {
    setLocation({ city: value });
    fetchLocations(value);
  };

  const selectLocation = (item: Suggestion) => {
    setLocation({
      city: item.display_name,
      lat: Number(item.lat),
      lng: Number(item.lon),
    });
    setSuggestions([]);
  };

  useEffect(() => {
    const saved = localStorage.getItem("location");
    if (saved) setLocation(JSON.parse(saved));
  }, []);

  const handleSearch = () => {
    console.log({
      query,
      city: location.city,
      lat: location.lat,
      lng: location.lng,
    });
  };

  return (
    <section className="flex justify-center bg-slate-50 py-6">
      <div className="relative flex w-[72%] items-center gap-3 rounded-2xl bg-white p-4 shadow-lg">
        
        <div className="relative flex flex-1 items-center gap-2 rounded-xl border px-3 py-2">
          📍
          <input
            value={location.city}
            onChange={(e) => handleLocationChange(e.target.value)}
            placeholder="Enter location"
            className="w-full outline-none text-sm"
          />

          {suggestions.length > 0 && (
            <ul className="absolute left-0 top-full z-20 mt-2 max-h-56 w-full overflow-auto rounded-xl bg-white shadow-lg">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => selectLocation(item)}
                  className="cursor-pointer px-4 py-2 text-sm hover:bg-slate-100"
                >
                  {item.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Query */}
        <div className="flex flex-1 items-center gap-2 rounded-xl border px-3 py-2">
          🔍
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctors, clinics, hospitals"
            className="w-full outline-none text-sm"
          />
        </div>

        <button
          onClick={handleSearch}
          className="rounded-xl bg-teal-500 px-6 py-2 text-white font-medium hover:bg-teal-600"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="absolute mt-20 text-sm text-slate-500">
          Searching locations...
        </p>
      )}
    </section>
  );
};

export default SearchSection;
