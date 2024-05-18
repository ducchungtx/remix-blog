import { useState } from "react";

function Contact() {
  const [result, setResult] = useState<string>('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target as HTMLFormElement);

    formData.append("access_key", "4c5ec275-829d-40c4-9a37-2ac739f84ea1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (e.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="mt-1 gradient-text slogan">
            Let&apos;s make something awesome together!
          </h1>
        </div>
      </div>
      <div className="mt-12 max-w-lg mx-auto">
        {/* Card */}
        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
          <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
            Fill in the form
          </h2>
          <form onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="4c5ec275-829d-40c4-9a37-2ac739f84ea1" />
            <div className="grid gap-4 lg:gap-6">
              {/* Grid */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Name</label>
                <input type="text" name="name" id="name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
              </div>
              {/* End Grid */}
              {/* Grid */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
              </div>
              {/* End Grid */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Message</label>
                <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" defaultValue={""} />
              </div>
            </div>
            {/* End Grid */}
            <div className="mt-6 grid">
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
            </div>
          </form>
          <span>{result}</span>
        </div>
        {/* End Card */}
      </div>

    </div>

  )
}

export default Contact
