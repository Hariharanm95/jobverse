import { JobCard } from "@/components/JobCard";

export default async function Page() {
  // Example: Fetch from your API
  const res = await fetch("http://localhost:3000/api/jobs", { cache: "no-store" });
  const jobs = await res.json();

  return (
<main className="p-6 flex flex-wrap justify-center gap-6 font-Arial">
  {jobs.map((job: any) => (
    <JobCard
      key={job.id}
      jobTitle={job.jobTitle}
      companyName={job.companyName}
      location={job.location}
      locationType={job.locationType}
      jobType={job.jobType}
      lackPerAnnum={job.lackPerAnnum}
      experience={job.experience}
      jobDescription={job.jobDescription}
      requirements={job.requirements}
      responsibilities={job.responsibilities}
      applicationDeadline={job.applicationDeadline}
      createdAt={job.createdAt}
    />
  ))}
</main>

  );
}
