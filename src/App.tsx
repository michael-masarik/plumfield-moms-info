import { Gallery } from "@/components/Gallery"


export function App() {
  return (
    <div className=" w-full md:w-7/8 m-auto p-8">
      <h1 className="mb-4">Plumfield Moms Links</h1>
      <p className="mb-4">Hello! We are glad you are here. These are some links you might find useful. If you are looking for classroom pricing, just send Sara an email at <a href="mailto:plumfieldmoms@gmail.com" target="_blank" className="text-red-800 hover:text-red-950">plumfieldmoms@gmail.com</a></p>
      <Gallery></Gallery>
    </div>
  )
}

export default App
