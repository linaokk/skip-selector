import { useEffect, useState } from "react";
import axios from "axios";

const useSkips = (postcode = "NR32", area = "Lowestoft") => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const res = await axios.get(
          `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
        );
        setSkips(res.data || []);
      } catch (err) {
        console.error("API error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, [postcode, area]);

  return { skips, loading, error };
};

export default useSkips;
