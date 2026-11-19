import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";


const toListing = (r) => ({
  id: r.id,
  donorId: r.donor_id,
  type: r.type,
  quantity: r.quantity,
  kg: r.kg,
  address: r.address,
  lat: r.lat,
  lng: r.lng,
  isEvent: r.is_event,
  pickupAt: r.pickup_at,
  photo: r.photo_url,
  status: r.status,
  rank: r.rank || [],
  assignedNgo: r.assigned_ngo,
  escalations: r.escalations,
  safeUntil: new Date(r.safe_until).getTime(),
  cookedAt: new Date(r.cooked_at).getTime(),
});

export function useNgoListings(ngoId) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (!ngoId) return;

    const load = async () => {
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .eq("assigned_ngo", ngoId);
      if (!error) setListings(data.map(toListing));
    };

    load();

    const channel = supabase
      .channel("ngo-listings")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "listings" },
        load
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [ngoId]);

  const offered = listings.filter((l) => l.status === "posted");
  const pickups = listings.filter((l) =>
    ["accepted", "on_the_way"].includes(l.status)
  );

  return { offered, pickups };
}