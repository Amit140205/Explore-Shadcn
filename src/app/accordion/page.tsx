import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {nanoid} from "nanoid"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



function AccordionPage() {
    //enabling multiple accordion
    const faq = [
        {
            question : "question1",
            answer : "answer1"
        },{
            question : "question2",
            answer : "answer2"
        },{
            question : "question3",
            answer : "answer3"
        }
    ]
  return (
    <div className="flex justify-center items-center flex-col">
        <main className="w-[500px] p-4">
            {/* single */}
            {/* <Accordion type="single" collapsible>
         <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>
    </Accordion> */}

                {/* multiple */}

            <Accordion type="single" collapsible>
                {faq.map(({question,answer},index)=>(
                    <AccordionItem value={`item-${index}`} key={nanoid()}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
                {answer}
            </AccordionContent>
        </AccordionItem>
                ))}
            </Accordion>
        </main>

                <AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  )
}

export default AccordionPage