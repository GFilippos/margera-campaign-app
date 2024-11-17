import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col p-24 space-y-16">
      <header className="font-bold text-4xl">
        This is the requested App using Next 15, Typescript, TailwindCSS, Zod and shadcn/ui library.
      </header>
      <p className="font-semibold text-lg">
        Perform add and delete user operations in campaign monitor api. Api calls using REST, Zod for form validation,
        TailwindCSS for a mobile first approach and i have also used shadcn/ui library for a clean, consistent and
        seamless interface! There is also error handling for every operation as well as a 404 page if the user navigates
        to a page that doesn&apos;t exist.
      </p>
      <ul className="font-semibold text-md px-6 space-y-2">
        <li>
          1: The{' '}
          <Link href="/subscribers" className="underline text-blue-600 hover:text-blue-400">
            Subscribers List
          </Link>{' '}
          link on the sidebar will navigate you to the list of all active subscribers.
        </li>
        <li>
          2: The{' '}
          <Link href="/subscriber/add" className="underline text-blue-600 hover:text-blue-400">
            Add Subscriber
          </Link>{' '}
          link will navigate you to a form to add a new subscriber on the campaign monitor list. The form needs a name,
          an email and a consent tracking choice for the subscriber. After successfully adding a subscriber there is a
          subtle confirmation at the bottom of the card and you can add another subscriber right away.
        </li>
        <li>
          3: On the Subscribers List there is an option to remove the subscribe permanently. The user can remove the
          subscriber of his choice by clicking on the remove button and then after a confirmation dialog click on the
          remove cta button. After successfully removing a subscriber the page will refresh to reflect the list of the
          remaining active subscribers.
        </li>
        <li>
          4: There is also error handling in case any of the requests (add,remove) fails. You are going to be needing a
          CAMPAIGN_API_KEY if you want to reproduce to a local environment. I have also hardcoded the client list so you
          are also going to need to change that as you will get a different LIST_ID in this case.
        </li>
        <li>
          4: I have also included a link with my portfolio website, github account, and resume! Feel free to explore
          them!
        </li>
        <p className="pt-8 text-sm leading-tight">
          <strong>PS:</strong> I have noticed there is some delay due to the campaign monitor platform on add and delete
          operations. Sometimes it can take up to 1 minute for a change to reflect on the campaign list. I have user
          tested the app extensively and also tested the API&apos;s using Postman.
        </p>
      </ul>
    </div>
  );
}
