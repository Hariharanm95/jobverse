"use client";

import { useState, useEffect } from "react";
import MainNavbar from "@/components/MainNavbar";
import SearchNavbar from "@/components/SearchNavbar";
import { JobCard } from "@/components/JobCard";
import CreateJobForm from "@/components/CreateJobForm";

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/jobs", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <>
      <MainNavbar onCreateJobClick={() => setShowForm(true)} />
      <SearchNavbar />

      <main className="p-6 flex flex-wrap justify-center gap-6 mt-6">
        {jobs.map((job: any) => (
          <JobCard key={job.id} {...job} />
        ))}
      </main>

      {showForm && (
        <CreateJobForm onClose={() => setShowForm(false)} />
      )}
    </>
  );
}
