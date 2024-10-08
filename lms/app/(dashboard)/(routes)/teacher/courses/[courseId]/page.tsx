import { IconBadge } from "@/components/icon_badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Description, Title } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";

const CouserIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
  });
  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completeFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completeFields}/${totalFields})`;
  return (
    <div className='p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-y-2'>
          <h1 className=''>Course Setup</h1>
          <span className='text-sm text-slate-700'>
            Complete all fields {completionText}
          </span>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
        <div>
          <div className='flex items-center gap-x-2'>
            <IconBadge size='sm' variants='success' icon={LayoutDashboard} />
            <h2 className='text-xl'>Customize your course</h2>
          </div>

          <TitleForm initialData={course} courseId={course.id} />
          <DescriptionForm initialData={course} courseId={course.id} />
        </div>
      </div>
    </div>
  );
};

export default CouserIdPage;
