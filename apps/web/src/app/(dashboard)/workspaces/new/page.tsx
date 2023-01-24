"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Card, Spacer, Text, TextField } from "@opendash/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "src/lib/trpc";
import { mutate } from "swr";
import { Workspace } from "db";
import { useRouter } from "next/navigation";
import { appState } from "src/context/AppState";

const schema = z.object({
  name: z.string().min(3).max(100),
});

type FormData = z.infer<typeof schema>;

const NewWorkspace = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const mutation = api.workspace.create.useSWRMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await mutation.trigger(data);
      await mutate(
        api.workspace.getAll.getKey(),
        (data) => {
          return [...((data ?? []) as Workspace[]), result];
        },
        true
      );

      if (!result) return;
      appState.workspaceId = result.id;

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text size="2">
          Each workspace has its own databases, collaborators, permissions, and
          billing.
        </Text>
        <Card className="mt-4" bordered>
          <Card.Body size="medium">
            <TextField
              error={errors.name?.message}
              label="Workspace name"
              {...register("name")}
            />
          </Card.Body>
        </Card>
        <Spacer size={4} />
        <Button
          loading={mutation.isMutating}
          variant="flat"
          color="blue"
          rounded="3"
        >
          Create workspace <ArrowRightIcon />
        </Button>
      </form>
    </div>
  );
};

export default NewWorkspace;
