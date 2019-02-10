import { useState, useEffect } from "react";
import { User } from "../../user";
import { loadUser } from "../../api";

export function useUser(email: string) {
  let [data, setData] = useState<User | null>(null);
  let [error, setError] = useState<string | null>(null);
  let [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadUser(email)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [email]);

  return { data, loading, error };
}
