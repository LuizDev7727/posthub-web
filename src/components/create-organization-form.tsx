import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type CreateOrganizationFormType,
  createOrganizationSchema,
} from "@/schemas/organization/create-organization.schema";
import { createSlug } from "@/utils/create-slug";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Field,
  FieldDescription,
  FieldContent,
  FieldTitle,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "./ui/field";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export function CreateOrganizationForm() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<CreateOrganizationFormType>({
    resolver: zodResolver(createOrganizationSchema),
    defaultValues: {
      name: "",
    },
  });

  const slug = createSlug(watch("name"));

  const { mutateAsync } = useMutation({
    mutationFn: async ({ name, slug }: { name: string; slug: string }) => {
      await authClient.organization.create({
        name,
        slug,
      });
    },
    onSuccess(data, variables, onMutateResult, context) {
      queryClient.invalidateQueries({
        queryKey: trpc.getOrganizations.queryKey(),
      });
    },
    onError(error, variables, onMutateResult, context) {
      toast.error(error.message);
    },
  });

  async function onSubmit(formBody: CreateOrganizationFormType) {
    const { name } = formBody;

    const { data, error } = await authClient.organization.checkSlug({
      slug,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (!data?.status) {
      toast.error(`Organization with slug: ${slug} already taken`);
      return;
    }

    await mutateAsync({
      name,
      slug,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label>Name</Label>
        <Input placeholder="Rcc Enginerring" {...register("name")} />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label>Slug</Label>
        <Input readOnly={true} placeholder={slug} />
      </div>

      <div className="flex items-center gap-x-2">
        <div className="w-full max-w-md">
          <FieldGroup>
            <FieldSet>
              <FieldLabel htmlFor="compute-environment-p8w">
                Select Plan
              </FieldLabel>
              <FieldDescription>
                Select the compute environment for your cluster.
              </FieldDescription>
              <RadioGroup defaultValue="free">
                <FieldLabel htmlFor="kubernetes-r2h">
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>FREE</FieldTitle>
                      <FieldDescription>
                        Run GPU workloads on a K8s configured cluster.
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
                  </Field>
                </FieldLabel>
                <FieldLabel htmlFor="vm-z4k">
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>PRO</FieldTitle>
                      <FieldDescription>
                        Access a VM configured cluster to run GPU workloads.
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem value="vm" id="vm-z4k" />
                  </Field>
                </FieldLabel>
              </RadioGroup>
            </FieldSet>
          </FieldGroup>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Create Organization
      </Button>
    </form>
  );
}
