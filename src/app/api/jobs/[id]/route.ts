import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE a job
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.job.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: "Job deleted" });
}

// UPDATE a job
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const {
    jobTitle,
    companyName,
    location,
    locationType,
    jobType,
    lackPerAnnum,
    experience,
    jobDescription,
    requirements,
    responsibilities,
    applicationDeadline,
  } = await req.json();

  const updatedJob = await prisma.job.update({
    where: { id: params.id },
    data: {
      jobTitle,
      companyName,
      location,
      locationType,
      jobType,
      lackPerAnnum,
      experience,
      jobDescription,
      requirements,
      responsibilities,
      applicationDeadline: applicationDeadline
        ? new Date(applicationDeadline)
        : undefined,
    },
  });

  return NextResponse.json(updatedJob);
}
