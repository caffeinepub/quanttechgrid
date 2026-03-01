import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetDownloadCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["downloadCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getDownloadCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIncrementDownloadCount() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.incrementDownloadCount();
    },
  });
}

export function useSubmitPilotRequest() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      company,
      email,
      message,
    }: {
      name: string;
      company: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitPilotRequest(name, company, email, message);
    },
  });
}
