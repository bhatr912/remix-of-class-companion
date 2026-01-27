import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will the app have my coaching name?",
    answer: "Yes, the app will be completely branded with your coaching name, logo, and colors. It will appear as your own app on the Play Store."
  },
  {
    question: "Can we add offline students in our app?",
    answer: "Absolutely! You can add all your offline students to the app and manage them alongside your online students seamlessly."
  },
  {
    question: "Any limitation on the number of students that can be added?",
    answer: "No, there are no limitations. You can add unlimited students to your app without any extra charges."
  },
  {
    question: "How to start without recorded content?",
    answer: "You can start with live classes immediately. Record them as you go and build your content library over time."
  },
  {
    question: "What is the duration of the live classes?",
    answer: "You can conduct live classes of any duration. There are no time limits on your live sessions."
  },
  {
    question: "Is it easy to upload and sell courses via app?",
    answer: "Yes, our platform makes it extremely easy. Just upload your content, set your price, and start selling immediately."
  },
  {
    question: "When will be the app delivered?",
    answer: "Your branded app will be delivered within 7-10 working days after completing all requirements."
  },
  {
    question: "Will Classplus also give website?",
    answer: "Yes, you get a professional website along with your app, completely free and branded to your coaching."
  }
];

const FAQ = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            For more understanding, visit{" "}
            <span className="text-gradient">FAQs</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-sky-400 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
