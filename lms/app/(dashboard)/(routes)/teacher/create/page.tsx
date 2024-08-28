"use client"

import * as z from "zod"
import axios from "axios"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { useRouter } from "next/navigation"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { title } from "process"
import Link from "next/link"
import toast from "react-hot-toast"

const formSchema = z.object({
  title: z.string().min(1,{
    message: "Title is required"
  })
})
const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
  })

  const { isSubmitting, isValid } = form.formState

  const onSubmit = async ( value: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/course", value);
      router.push(`/teacher/courses/${response.data.id}`);
    } catch {
      toast.error("some thing went wrong !")
    }
  }

  return ( 
    <div className="max-w-5xl mx-auto flex md:items-center
    md:justify-center">
      <div>
        <h1 className="text-2xl">
          Name your course
        </h1>
        <p className="text-sm text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex harum aut, unde molestias enim, deleniti ea asperiores dolorem quae praesentium dolore voluptatem ducimus aliquid similique quam modi quidem laboriosam.
        </p>
        <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-8"
            >
              <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      Course title
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="e.g 'avance'"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      what will you teach in this course?
                    </FormDescription>
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Link href="/">
                  <Button
                  type="button"
                    variant={"oppa"}
                  >
                    Cancel 
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  Continue  
                </Button>
              </div>
            </form>
        </Form>
      </div>
    </div>
   );
}
 
export default CreatePage;
