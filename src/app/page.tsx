import MainNavbar from "@/components/MainNavbar";
import SearchNavbar from "@/components/SearchNavbar";
import { JobCard } from "@/components/JobCard";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/jobs", { cache: "no-store" });
  const jobs = await res.json();

  return (
    <>
      <MainNavbar />
      <SearchNavbar />

      <main className="p-6 flex flex-wrap justify-center gap-6 mt-6">
        {jobs.map((job: any) => (
          <JobCard key={job.id} {...job} />
        ))}
      </main>
    </>
  );
}
