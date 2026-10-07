import { Container } from "../ui/Container";

const contacts = [
  {
    country: "Sri Lanka",
    flag: "🇱🇰",
    phone: "+94 0740311733",
    href: "tel:+94740311733",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    phone: "+44 7471359197",
    href: "tel:+447471359197",
  },
];

export function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="bg-black py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2
            id="contact-heading"
            className="text-center text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Give us a call
          </h2>

          <div className="mt-12 grid grid-cols-1 border-y border-white/10 sm:mt-16 md:grid-cols-2">
            {contacts.map((contact, index) => (
              <div
                key={contact.country}
                className={`py-8 text-center sm:py-10 md:px-10 ${
                  index === 1
                    ? "border-t border-white/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <div className="flex items-center justify-center gap-2.5">
                  <span className="text-base" role="img" aria-label={`${contact.country} flag`}>
                    {contact.flag}
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    {contact.country}
                  </h3>
                </div>
                <a
                  href={contact.href}
                  className="mt-4 inline-block font-sora text-2xl font-semibold tracking-tight text-white transition-colors duration-200 hover:text-brand-blue focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:text-3xl"
                >
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            Prefer email?{" "}
            <a
              href="mailto:hello@zeylun.com"
              className="font-medium text-zinc-300 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
            >
              hello@zeylun.com
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
