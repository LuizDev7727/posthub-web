import { createFileRoute } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { CreateProjectForm } from "./-components/create-project-form";
import { ProjectsList } from "./-components/projects-list";
import { Suspense } from "react";
import { ProjectsListLoading } from "./-components/projects-list-loading";

export const Route = createFileRoute("/dashboard/orgs/$slug/projects/")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="mt-6 text-xl font-semibold">Projects</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircleIcon />
              Add more Projects
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new Projects</DialogTitle>
              <DialogDescription>
                Project is a list of best moments(clips) from a video. Drag&Drop
                a video(file) or youtube url to start cliping.
              </DialogDescription>
            </DialogHeader>

            <CreateProjectForm />
          </DialogContent>
        </Dialog>
      </div>

      <Suspense fallback={<ProjectsListLoading />}>
        <ProjectsList />
      </Suspense>
    </div>
  );
}
